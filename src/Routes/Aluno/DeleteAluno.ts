import { AlunoRepository } from "Repository/AlunoRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface DeleteAlunoDeps {
  alunoRepo: AlunoRepository
}

export const DeleteAluno: (deps: DeleteAlunoDeps) => 
  RouteHandler<Req<{}, {}, {matricula: string }>
  > = ({ alunoRepo }: DeleteAlunoDeps) => async (req, res) => {
    // Preciso corrigir essa tratativa
    if(!req.params) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Body needed"
        })
    }

    console.log("Passou da checagem do body", req.params)

    const { matricula } = req.params


    return alunoRepo.deleteAluno(matricula)
      .then(() => res
        .status(200)
        .json({
          code: 200,
          status: 'success',
          message: "Deleted user with success"
        }))
        .catch(err => res
            .status(400)
            .json({
              code: 400,
              status: "error",
              message: "Failed to delete user"
            }))

  }

export default DeleteAluno