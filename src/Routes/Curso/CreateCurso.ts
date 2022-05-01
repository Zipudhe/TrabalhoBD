import CursoRepository from "Repository/CursoRepository";

import { RouteHandler } from "Utils/routeHandler";
import { BodyType, Req } from "Utils/request"

interface CreateCursoDeps {
  cursoRepo: CursoRepository
}

interface ICurso extends BodyType {
  nome: string,
  materias?: string
}

export const CreateCurso: (deps: CreateCursoDeps) => 
  RouteHandler<Req<ICurso, {}>
  > = ({ cursoRepo }: CreateCursoDeps) => async (req, res) => {
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

    const { nome, materias } = req.body


    const exists = await cursoRepo.getCursoByNome(nome)
    if(exists) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Curso já existe"
        })
    }

    const aluno = await cursoRepo.createCurso(nome, materias)

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
          message: "Curso created",
          data: aluno
        })
  }

export default CreateCurso