import { Connection } from 'typeorm'
import express from 'express'
import { Router } from 'Routes'

import { AlunoRepository } from "Repository/AlunoRepository"

import CreateAluno from './CreateAluno'
import DeleteAluno from "./DeleteAluno"
import GetAluno from "./GetAluno"
import ListAlunos from "./ListAlunos"
import UpdateAluno from "./UpdateAluno"
import SubscribeToCourse from "./SubscribeToCourse"
import AddMateria from "./AddMateria"
import ListAlunoClasses from "./ListAlunoClasses"

type AlunoDeps = {
  alunoRepo?: AlunoRepository,
  conn: Connection
}

const AlunoRouter: Router<AlunoDeps> = (deps, options) => {
  const { conn, alunoRepo = conn.getCustomRepository(AlunoRepository) } = deps

  return express
    .Router(options)
    .post("/create", CreateAluno({ alunoRepo }))
    .delete("/delete/:matricula", DeleteAluno({ alunoRepo }))
    .get("/:matricula", GetAluno({ alunoRepo }))
    .get("/", ListAlunos({ alunoRepo }))
    .put("/:matricula", UpdateAluno({ alunoRepo }))
    .put("/subscribe/:matricula", SubscribeToCourse({ alunoRepo }))
    .post("/subscribe/materia/:matricula", AddMateria({ alunoRepo }))
    .get("/materias/:matricula", ListAlunoClasses({ alunoRepo }))
}

export default AlunoRouter