import CursoRepository from "Repository/CursoRepository";

import { RouteHandler } from "Utils/routeHandler";
import { BodyType, Req } from "Utils/request"

interface UpdateCursoDeps {
  cursoRepo: CursoRepository
}

interface ICurso extends BodyType {
  nome: string
}

export const UpdateCurso: (deps: UpdateCursoDeps) => 
  RouteHandler<Req<ICurso, {}, {id: number}>
  > = ({ cursoRepo }: UpdateCursoDeps) => async (req, res) => {
    //TODO Preciso corrigir essa tratativa
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

    const { nome } = req.body


    const curso = await cursoRepo.getCursoById(req.params.id)
    if(!curso) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Curso não existe"
        })
    }

    return await cursoRepo.updateCurso(curso, nome)
      .then(curso => res.json({
        code: 200,
        status: "success",
        message: "Curso atualizado com sucesso",
        data: curso
      }))
      .catch(err => res.status(400).json({
        code: 400,
        status: 'error',
        message: "Falhar ao atualizar o curso",
        erro: err
      }))

  }

export default UpdateCurso