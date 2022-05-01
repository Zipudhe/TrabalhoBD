import { CursoRepository } from "Repository/CursoRepository"
import { RouteHandler } from "Utils/routeHandler"
import { QueryType, Req } from "Utils/request"

interface AddMateriaDepss {
  cursoRepo: CursoRepository
}

interface IMateriaQuery extends QueryType {
  materiaCodigo: string,
  cursoId: number
}

export const AddMateria: (deps: AddMateriaDepss) => 
  RouteHandler<Req<{}, {}, {}, IMateriaQuery>
  > = ({ cursoRepo }: AddMateriaDepss) => async (req, res) => {
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

    const { materiaCodigo, cursoId } = req.query

    const curso = await cursoRepo.getCursoById(cursoId)

    if(!curso) return res.status(400).json({
      code: 400,
      status: 'error',
      message: 'curso not found'
    })

    return await cursoRepo.addMateriaToCurso(materiaCodigo, cursoId)
                          .then(() => res
                          .status(200)
                          .json({
                            code: 200,
                            status: 'success',
                            message: "Materia added with success",
                          }))
                          .catch(err => res
                              .status(400)
                              .json({
                                code: 400,
                                status: "error",
                                message: "Failed to add materia",
                                error: err
                              }))
    }

export default AddMateria