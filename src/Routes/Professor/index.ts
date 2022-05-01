import { Connection } from 'typeorm'
import express from 'express'
import { Router } from 'Routes'

import { ProfessorRepository } from "Repository/ProfessorRepository"

import CreateProfessor from "./CreateProfessor"
import DeleteProfessor from "./DeleteProfessor"
import GetProfessor from "./GetProfessor"
import ListProfessor from "./ListProfessor"
import UpdateProfessor from "./UpdateProfessor"
import AddMateria from "./AddMateria"
import RemoveMateria from "./RemoveMateria"


type ProfessorDeps = {
  professorRepo?: ProfessorRepository,
  conn: Connection
}

const ProfessorRouter: Router<ProfessorDeps> = (deps, options) => {
  const { conn, professorRepo = conn.getCustomRepository(ProfessorRepository) } = deps

  return express
    .Router(options)
      .get("/", ListProfessor({ professorRepo }))
      .post("/create", CreateProfessor({ professorRepo }))
      .put("/:matricula", UpdateProfessor({ professorRepo }))
      .get("/:matricula", GetProfessor({ professorRepo }))
      .delete("/:matricula", DeleteProfessor({ professorRepo }))
      .post("/materia/:matricula", AddMateria({ professorRepo }))
      .delete("/materia/remove", RemoveMateria({ professorRepo }))
}

export default ProfessorRouter