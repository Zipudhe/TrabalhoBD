import { AlunoRepository } from "Repository/AlunoRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface ListMateriasAlunoDeps {
  alunoRepo: AlunoRepository
}

export const ListAlunoClasses: (deps: ListMateriasAlunoDeps) => 
  RouteHandler<Req<{}, {}, {matricula: string }>
  > = ({ alunoRepo }: ListMateriasAlunoDeps) => async (req, res) => {
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

    const materias = await alunoRepo.getAlunoByMatricula(matricula)
      .then(async(aluno) => await alunoRepo.getAlunoMaterias(aluno))

    console.log(materias)
    if(!materias) {
      return res
              .status(404)
              .json({
                code: 404,
                status: "error",
                message: "Problemas ao encontrar as materias"
              })
    }

    return res
            .status(200)
            .json({
              code: 200,
              status: 'success',
              message: "Got materias",
              data: materias
            })
  }

export default ListAlunoClasses