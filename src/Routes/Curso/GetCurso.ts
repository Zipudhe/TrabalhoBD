import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"
import CursoRepository from "Repository/CursoRepository"

interface GetCursosDeps {
  cursoRepo: CursoRepository
}

export const GetCurso: (deps: GetCursosDeps) => 
  RouteHandler<Req<{}, {}, {id: number}>
  > = ({ cursoRepo }: GetCursosDeps) => async (req, res) => {

    console.log(req.params)

   return await cursoRepo.getCursoById(req.params.id)
    .then(curso => res.json({
      code: 200,
      status: 'success',
      message: "Curso found",
      data: curso
    }))
    .catch(err => {
      res.status(400).json({
        code: 400,
        status: 'error',
        message: "Curso not found",
        error: err
      })
    })
}


export default GetCurso