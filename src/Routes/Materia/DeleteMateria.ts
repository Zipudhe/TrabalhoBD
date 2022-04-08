import { MateriaRepository } from "Repository/MateriaRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface GetAlunoDeps {
  materiaRepo: MateriaRepository
}

export const DeletMateria: (deps: GetAlunoDeps) => 
  RouteHandler<Req<{}, {}, {codigo: string }>
  > = ({ materiaRepo }: GetAlunoDeps) => async (req, res) => {
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

    const { codigo } = req.params

    return await materiaRepo.deleteMateria(codigo)
                          .then(() => res
                          .status(200)
                          .json({
                            code: 200,
                            status: 'success',
                            message: "Deleted materia with success"
                          }))
                          .catch(err => res
                              .status(400)
                              .json({
                                code: 400,
                                status: "error",
                                message: "Failed to delete materia"
                              }))
    }

export default DeletMateria