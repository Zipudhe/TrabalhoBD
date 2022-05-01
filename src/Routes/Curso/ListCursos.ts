import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"
import CursoRepository from "Repository/CursoRepository"

interface GetCursosDeps {
  cursoRepo: CursoRepository
}

export const ListCursos: (deps: GetCursosDeps) => 
  RouteHandler<Req<{}, {}, {}>
  > = ({ cursoRepo }: GetCursosDeps) => async (req, res) => {

    return await cursoRepo.listCursos()
      .then(alunos => res
                      .status(200)
                      .json({
                        code: 200,
                        status: 'success',
                        message: "Got Cursos",
                        data: alunos
                      }))
        .catch(() => res
                      .status(404)
                      .json({
                        code: 404,
                        status: "error",
                        message: "Cursos not found"
                      }))
}


export default ListCursos