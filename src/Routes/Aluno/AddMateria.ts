import { AlunoRepository } from "Repository/AlunoRepository"
import { RouteHandler } from "Utils/routeHandler"
import { BodyType, Req } from "Utils/request"

import Materia from "Entity/Materia"

interface SubscribeToClass {
  alunoRepo: AlunoRepository
}

interface IUser extends BodyType {
  materia: string
}

// TODO mudar essa repository pra Materia
export const AddMateria: (deps: SubscribeToClass) => 
  RouteHandler<Req<IUser, {}, {matricula: string}>
  > = ({ alunoRepo }: SubscribeToClass) => async (req, res) => {
    //TODO Preciso corrigir essa tratativa
    console.log(req.body)
    if(Object.keys(req.body).length == 0 || req.body == undefined) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Body needed"
        })
    }

    console.log("Passou da checagem do body", req.body)

    const { materia } = req.body


    const aluno = await alunoRepo.getAlunoByMatricula(req.params.matricula)
    // const materias = await aluno.getAlunoMaterias(aluno)


    if(!aluno) {
      return res
        .status(400)
        .json({
          code: 400,
          status: 'error',
          message: "Aluno não existe"
        })
    }


    // const alunoMaterias = await alunoRepo.getAlunoMaterias(aluno)
    //   .then((materias: Materia[]) => {
    //     console.log("materias: ", materias)
    //     console.log("materia: ", materia )
    //     if(!materias.filter((m: Materia) => m.codigo == materia)) {
    //       return res.status(400).json({
    //         message: "Aluno já inscrito nessa materia",
    //         code: 400,
    //         status: "error"
    //       })
    //     }
    //   }) as Materia[]

    // if(alunoMaterias) {
    //   await alunoRepo.getPreRequisitos(materia)
    //     .then((requisitos: Materia[]) => {
    //       const canSubscribe = requisitos.map(requisito => {
    //         return alunoMaterias.find((m: Materia )=> m.codigo == requisito.codigo)
    //       })
  
    //       if(!canSubscribe) return res.status(400).json({
    //                                               message: "Aluno não compriu os requisitos da materia",
    //                                               code: 400,
    //                                               status: "error"
    //                                             })
    //     })      
    // }
  


    return alunoRepo.addMateria(aluno, materia)
      .then(aluno => {
        res.json({
          message: `Aluno inscrito na matéria: ${materia}` ,
          code: 200,
        })
      })
      .catch(err => {
        res.status(400).json({
          message: "Não foi possível inscrever esse aluno",
          code: 400,
          error: err
        })
      })
  }

export default AddMateria