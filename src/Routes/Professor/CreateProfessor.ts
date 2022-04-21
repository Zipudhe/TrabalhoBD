import { ProfessorRepository } from "Repository/ProfessorRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

interface CreateProfessorDeps {
  professorRepo: ProfessorRepository
}

interface IProfessor extends BodyType {
  matricula: string,
  nome: string,
  email: string,
  cargo: string
}

export const CreateMateria: (deps: CreateProfessorDeps) => 
  RouteHandler<Req<IProfessor, {}, {}>
  > = ({ professorRepo }: CreateProfessorDeps) => async (req, res) => {
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

    const {matricula, nome, email, cargo } = req.body


    const professor = await professorRepo.getProfessorByMatricula(matricula)

    if(professor) {
      res.status(400).json({
        message: "Esse professor já existe",
        code: 400
      })
    }

    
    professorRepo.createProfessor(matricula, nome, email, cargo)
      .then(professor => res.json({
        message: "Professor criado",
        code: 200,
        status: 'success',
        data: professor
      }))
      .catch(err => {
        res.status(400).json({
          message: "Não foi possível criar professor",
          code: 400,
          status: 'error',
          error: err
        })
      })
  }

export default CreateMateria