import { ProfessorRepository } from "Repository/ProfessorRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface GetProfessorDeps {
  professorRepo: ProfessorRepository
}

export const GetProfessor: (deps: GetProfessorDeps) => 
  RouteHandler<Req<{}, {}, { matricula: string }>
  > = ({ professorRepo }: GetProfessorDeps) => async (req, res) => {
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

    const { matricula } = req.params

    return await professorRepo.getProfessorByMatricula(matricula)
                          .then((professor) => res
                          .status(200)
                          .json({
                            code: 200,
                            status: 'success',
                            message: "Found professor",
                            data: professor
                          }))
                          .catch(err => res
                              .status(400)
                              .json({
                                code: 400,
                                status: "error",
                                message: "Failed to get professor"
                              }))
    }

export default GetProfessor