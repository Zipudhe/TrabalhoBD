import { AlunoRepository } from "Repository/AlunoRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface UpdateAlunoDeps {
  alunoRepo: AlunoRepository
}

interface IUser extends BodyType {
  nome: string,
  situacao?: string,
  curso: number
}

export const UpdateAluno: (deps: UpdateAlunoDeps) => 
  RouteHandler<Req<IUser, {}, {matricula: string}>
  > = ({ alunoRepo }: UpdateAlunoDeps) => async (req, res) => {
    //TODO Preciso corrigir essa tratativa
    console.log(req.body)
    if(Object.keys(req.body).length == 0 || req.body == undefined) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Body needed"
        })
    }

    console.log("Passou da checagem do body", req.body)

    const { nome, curso, situacao } = req.body


    const aluno = await alunoRepo.getAlunoByMatricula(req.params.matricula)

    if(!aluno) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Aluno não existe"
        })
    }

    return alunoRepo.updateAluno(aluno, nome, situacao, curso)
      .then(aluno => {
        res.json({
          message: "Aluno atualizado",
          code: 200,
          data: aluno
        })
      })
      .catch(err => {
        res.status(400).json({
          message: "Não foi possível atualizar esse aluno",
          code: 400,
          error: err
        })
      })
  }

export default UpdateAluno