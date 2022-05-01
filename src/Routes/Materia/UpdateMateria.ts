import { MateriaRepository } from "Repository/MateriaRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface UpdateMateriaDeps {
  materiaRepo: MateriaRepository
}

interface IMateria extends BodyType {
  carga: number,
  prerequisitos: string[]
}

export const UpdateMateria: (deps: UpdateMateriaDeps) => 
  RouteHandler<Req<IMateria, {}, {codigo: string}>
  > = ({ materiaRepo }: UpdateMateriaDeps) => async (req, res) => {
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

    const { carga, prerequisitos } = req.body


    const materia = await materiaRepo.getMateriaBycodigo(req.params.codigo)

    if(!materia) {
      res.status(400).json({
        message: "Essa matéria não existe",
        code: 400
      })
    }

    if(prerequisitos) {
      materiaRepo.updateMateriaRequisitos(materia, prerequisitos)
        .catch(err => res.status(400).json({
          message: "Falhar ao atualizar os requisitos",
          code: 400,
          error: err
        }))
    }


    materiaRepo.updateMateria(materia, carga)
      .then(materia => res.json({
        message: "Materia atualizada",
        code: 200,
        data: materia
      }))
      .catch(err => {
        res.status(400).json({
          message: "Não foi possível atualizar essa materia",
          code: 400,
          error: err
        })
      })
  }

export default UpdateMateria