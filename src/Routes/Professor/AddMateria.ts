import { ProfessorRepository } from "Repository/ProfessorRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface AddMateriaDepss {
  professorRepo: ProfessorRepository
}

interface IMateria extends BodyType {
  materia: string
}

export const AddMateria: (deps: AddMateriaDepss) => 
  RouteHandler<Req<IMateria, {}, { matricula: string }>
  > = ({ professorRepo }: AddMateriaDepss) => async (req, res) => {
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

    const { matricula } = req.params
    const { materia } = req.body

    const professor = await professorRepo.getProfessorByMatricula(matricula)

    if(!professor) return res.status(400).json({
      code: 400,
      status: 'error',
      message: 'Professor not found'
    })

    return await professorRepo.addMateria(professor ,materia)
                          .then(() => res
                          .status(200)
                          .json({
                            code: 200,
                            status: 'success',
                            message: "Materia added with success",
                          }))
                          .catch(err => res
                              .status(400)
                              .json({
                                code: 400,
                                status: "error",
                                message: "Failed to add materia"
                              }))
    }

export default AddMateria