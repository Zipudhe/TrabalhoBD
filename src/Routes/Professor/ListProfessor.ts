import { ProfessorRepository } from "Repository/ProfessorRepository"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

interface GetProfessoresDeps {
  professorRepo: ProfessorRepository
}

export const ListAlunos: (deps: GetProfessoresDeps) => 
  RouteHandler<Req<{}, {}, {}>
  > = ({ professorRepo }: GetProfessoresDeps) => async (req, res) => {
    // Preciso corrigir essa tratativa



    return await professorRepo.listProfessores()
      .then(professor => res
                      .status(200)
                      .json({
                        code: 200,
                        status: 'success',
                        message: "Got professores",
                        data: professor
                      }))
        .catch(() => res
                      .status(404)
                      .json({
                        code: 404,
                        status: "error",
                        message: "professor not found"
                      }))
}


export default ListAlunos