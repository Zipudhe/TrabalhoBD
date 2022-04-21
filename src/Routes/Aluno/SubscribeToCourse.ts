import { AlunoRepository } from "Repository/AlunoRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface SubscribeAlunoDeps {
  alunoRepo: AlunoRepository
}

interface IUser extends BodyType {
  curso: number
}

export const SubscribeToCourse: (deps: SubscribeAlunoDeps) => 
  RouteHandler<Req<IUser, {}, {matricula: string}>
  > = ({ alunoRepo }: SubscribeAlunoDeps) => async (req, res) => {
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

    const { curso } = req.body


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

    return alunoRepo.subscribeAluno(aluno, curso)
      .then(aluno => {
        res.json({
          message: "Aluno atualizado",
          code: 200,
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

export default SubscribeToCourse