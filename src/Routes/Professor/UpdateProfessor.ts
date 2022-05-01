import { ProfessorRepository } from "Repository/ProfessorRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface UpdateProfessorDeps {
  professorRepo: ProfessorRepository
}

interface IProfessor extends BodyType {
  nome?: string,
  email?: string,
  cargo?: string
}

export const UpdateMateria: (deps: UpdateProfessorDeps) => 
  RouteHandler<Req<IProfessor, {}, {matricula: string}>
  > = ({ professorRepo }: UpdateProfessorDeps) => async (req, res) => {
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

    const { nome, email, cargo } = req.body


    const professor = await professorRepo.getProfessorByMatricula(req.params.matricula)

    if(!professor) {
      res.status(400).json({
        message: "Esse professor não existe",
        code: 400
      })
    }

    
    professorRepo.updateProfessor(professor, nome, email, cargo)
      .then(professor => res.json({
        message: "Professor atualizado",
        code: 200,
        data: professor
      }))
      .catch(err => {
        res.status(400).json({
          message: "Não foi possível atualizar essa professor",
          code: 400,
          error: err
        })
      })
  }

export default UpdateMateria