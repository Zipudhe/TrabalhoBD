import { AlunoRepository } from "Repository/AlunoRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface CreateAlunoDeps {
  alunoRepo: AlunoRepository
}

interface IUser extends BodyType {
  matricula: string,
  email: string,
  nome: string,
  situacao?: string,
  curso: number
}

export const CreateAluno: (deps: CreateAlunoDeps) => 
  RouteHandler<Req<IUser, {}>
  > = ({ alunoRepo }: CreateAlunoDeps) => async (req, res) => {
    // Preciso corrigir essa tratativa
    if(!req.body) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Body needed"
        })
    }

    console.log("Passou da checagem do body", req.body)

    const { matricula, nome, email, curso, situacao } = req.body


    const exists = await alunoRepo.getAlunoByMatricula(matricula)
    if(exists) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Aluno já existe"
        })
    }

    const aluno = await alunoRepo.createAluno(matricula, email, nome, situacao, curso)

      if(!aluno) {
        return res
        .status(400)
        .json({
          code: 400,
          status: "error",
          message: "Failed to create aluno",
        })
      }
      return res
        .status(200)
        .json({
          code: 200,
          status: "success",
          message: "Aluno created",
          data: aluno
        })
  }

export default CreateAluno