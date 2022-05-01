import { MateriaRepository } from "Repository/MateriaRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface GetAlunoDeps {
  materiaRepo: MateriaRepository
}

export const GetMateria: (deps: GetAlunoDeps) => 
  RouteHandler<Req<{}, {}, {codigo: string }>
  > = ({ materiaRepo }: GetAlunoDeps) => async (req, res) => {
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

    const { codigo } = req.params

    const materia = await materiaRepo.getMateriaBycodigo(codigo)

    if(!materia) {
      return res
              .status(404)
              .json({
                code: 404,
                status: "error",
                message: "Materia not found"
              })
    }

    return res
            .status(200)
            .json({
              code: 200,
              status: 'success',
              message: "Got aluno",
              data: materia
            })
  }

export default GetMateria