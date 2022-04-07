import { AlunoRepository } from "Repository/AlunoRepository"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

interface GetAlunoDeps {
  alunoRepo: AlunoRepository
}

export const ListAlunos: (deps: GetAlunoDeps) => 
  RouteHandler<Req<{}, {}, {}>
  > = ({ alunoRepo }: GetAlunoDeps) => async (req, res) => {
    // Preciso corrigir essa tratativa



    return await alunoRepo.listAlunos()
      .then(alunos => res
                      .status(200)
                      .json({
                        code: 200,
                        status: 'success',
                        message: "Got Alunos",
                        data: alunos
                      }))
        .catch(() => res
                      .status(404)
                      .json({
                        code: 404,
                        status: "error",
                        message: "Alunos not found"
                      }))
}


export default ListAlunos