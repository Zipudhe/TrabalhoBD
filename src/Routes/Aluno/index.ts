import { Connection } from 'typeorm'
import express from 'express'
import { Router } from 'Routes'

import { AlunoRepository } from "Repository/AlunoRepository"

import CreateAluno from './CreateAluno'
import DeleteAluno from "./DeleteAluno"
import GetAluno from "./GetAluno"
import ListAlunos from "./ListAlunos"
import UpdateAluno from "./UpdateAluno"

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
}

export default AlunoRouter