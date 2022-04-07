import { AlunoRepository } from "Repository/AlunoRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface GetAlunoDeps {
  alunoRepo: AlunoRepository
}

export const GetAluno: (deps: GetAlunoDeps) => 
  RouteHandler<Req<{}, {}, {matricula: string }>
  > = ({ alunoRepo }: GetAlunoDeps) => async (req, res) => {
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

    console.log("Passou da checagem do body", req.params)

    const { matricula } = req.params

    const aluno = await alunoRepo.getAlunoByMatricula(matricula)

    if(!aluno) {
      return res
              .status(404)
              .json({
                code: 404,
                status: "error",
                message: "Aluno not found"
              })
    }

    return res
            .status(200)
            .json({
              code: 200,
              status: 'success',
              message: "Got aluno",
              data: aluno
            })
  }

export default GetAluno