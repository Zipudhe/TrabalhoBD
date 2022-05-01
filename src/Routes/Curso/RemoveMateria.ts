import { CursoRepository } from "Repository/CursoRepository"
import { RouteHandler } from "Utils/routeHandler"
import { QueryType, Req } from "Utils/request"

interface RemoveMateriaDeps {
  cursoRepo: CursoRepository
}

interface IMateriaQuery extends QueryType {
  materiaCodigo: string,
  cursoId: number
}

export const RemoveMateria: (deps: RemoveMateriaDeps) => 
  RouteHandler<Req<{}, {}, {}, IMateriaQuery>
  > = ({ cursoRepo }: RemoveMateriaDeps) => async (req, res) => {
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

    return await cursoRepo.removeMateriaFromCurso(materiaCodigo, cursoId)
                          .then(() => res
                          .status(200)
                          .json({
                            code: 200,
                            status: 'success',
                            message: "Materia removed with success",
                          }))
                          .catch(err => res
                              .status(400)
                              .json({
                                code: 400,
                                status: "error",
                                message: "Failed to add materia"
                              }))
    }

export default RemoveMateria