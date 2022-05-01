import { ProfessorRepository } from "Repository/ProfessorRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface RemoveMateriaDepss {
  professorRepo: ProfessorRepository
}

interface IMateria extends BodyType {
  materia: string
}

export const RemoveMateria: (deps: RemoveMateriaDepss) => 
  RouteHandler<Req<IMateria, {}, { matricula: string }, {materia: string, professorId: string}>
  > = ({ professorRepo }: RemoveMateriaDepss) => async (req, res) => {
    console.log("na rota de remover as paradas")
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

    const { materia, professorId } = req.query

    const professor = await professorRepo.getProfessorByMatricula(professorId)

    if(!professor) return res.status(400).json({
      code: 400,
      status: 'error',
      message: 'Professor not found'
    })

    return await professorRepo.removerMateria(professor, materia)
                          .then(() => res
                          .status(200)
                          .json({
                            code: 200,
                            status: 'success',
                            message: "Materia removed with success",
                          }))
                          .catch(err => res
                              .status(400)
                              .json({
                                code: 400,
                                status: "error",
                                message: "Failed to add materia"
                              }))
  }

export default RemoveMateria