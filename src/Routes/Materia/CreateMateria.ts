import { MateriaRepository } from "Repository/MateriaRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface CreateMateriaDeps {
  materiaRepo: MateriaRepository
}

interface IMateria extends BodyType {
  codigo: string,
  carga: number
}

export const CreateMateria: (deps: CreateMateriaDeps) => 
  RouteHandler<Req<IMateria, {}>
  > = ({ materiaRepo }: CreateMateriaDeps) => async (req, res) => {
    // Preciso corrigir essa tratativa
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

    const { codigo, carga } = req.body


    const exists = await materiaRepo.getMateriaBycodigo(codigo)
    if(exists) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Aluno já existe"
        })
    }

    const materia = await materiaRepo.createMateria(codigo, carga)

      if(!materia) {
        return res
        .status(400)
        .json({
          code: 400,
          status: "error",
          message: "Failed to create materia",
        })
      }
      return res
        .status(200)
        .json({
          code: 200,
          status: "success",
          message: "materia created",
          data: materia
        })
  }

export default CreateMateria