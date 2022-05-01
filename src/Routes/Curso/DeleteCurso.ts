import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"
import CursoRepository from "Repository/CursoRepository"

interface DeleteCursoDeps {
  cursoRepo: CursoRepository
}

export const DeleteCurso: (deps: DeleteCursoDeps) => 
  RouteHandler<Req<{}, {}, {id: number}>
  > = ({ cursoRepo }: DeleteCursoDeps) => async (req, res) => {


   return await cursoRepo.deleteCurso(req.params.id)
    .then(curso => res.json({
      code: 200,
      status: 'success',
      message: "Curso deleted",
    }))
    .catch(err => {
      res.status(400).json({
        code: 400,
        status: 'error',
        message: "Failed to delete curso",
        error: err
      })
    })
}


export default DeleteCurso