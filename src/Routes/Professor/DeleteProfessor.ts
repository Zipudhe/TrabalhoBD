import { ProfessorRepository } from "Repository/ProfessorRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface DeleteProfessorDeps {
  professorRepo: ProfessorRepository
}

export const DeleteProfessor: (deps: DeleteProfessorDeps) => 
  RouteHandler<Req<{}, {}, { matricula: string }>
  > = ({ professorRepo }: DeleteProfessorDeps) => async (req, res) => {
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

    console.log("Ta caindo aqui ?")
    const { matricula } = req.params

    return await professorRepo.deleteProfessor(matricula)
                          .then(() => res
                          .status(200)
                          .json({
                            code: 200,
                            status: 'success',
                            message: "Professor deleted",
                          }))
                          .catch(err => res
                              .status(400)
                              .json({
                                code: 400,
                                status: "error",
                                message: "Failed to delete professor"
                              }))
    }

export default DeleteProfessor