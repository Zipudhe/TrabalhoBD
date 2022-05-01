import { MateriaRepository } from "Repository/MateriaRepository"
import { RouteHandler } from "Utils/routeHandler"
import { QueryType, Req } from "Utils/request"

interface AddMateriaDepss {
  materiaRepo: MateriaRepository
}

interface IMateriaQuery extends QueryType {
  materiaCodigo: string,
  requisito: string
}

export const AddMateria: (deps: AddMateriaDepss) => 
  RouteHandler<Req<{}, {}, {}, IMateriaQuery>
  > = ({ materiaRepo }: AddMateriaDepss) => async (req, res) => {
    // Preciso corrigir essa tratativa
    if(!req.params) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Param needed"
        })
    }

    const { materiaCodigo, requisito } = req.query


    const [materiaExistis, requisitoExists] = await Promise.all([
      materiaRepo.getMateriaBycodigo(materiaCodigo),
      materiaRepo.getMateriaBycodigo(requisito)
    ])
    .then(values => values)

    console.log(materiaExistis, requisitoExists)

    if(!materiaExistis) return res.status(400).json({
      code: 400,
      status: 'error',
      message: 'materia not found'
    })

    if(!requisitoExists) return res.status(400).json({
      code: 400,
      status: 'error',
      message: 'requisito not found'
    })

    return await materiaRepo.addPreRequisito(materiaExistis, requisitoExists)
                          .then(() => res
                          .status(200)
                          .json({
                            code: 200,
                            status: 'success',
                            message: "Requisito added with success",
                          }))
                          .catch(err => res
                              .status(400)
                              .json({
                                code: 400,
                                status: "error",
                                message: "Failed to add requisito",
                                error: err
                              }))
    }

export default AddMateria