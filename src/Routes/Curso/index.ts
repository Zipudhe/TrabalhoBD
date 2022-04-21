import { Connection } from 'typeorm'
import express from 'express'
import { Router } from 'Routes'

import { CursoRepository } from "Repository/CursoRepository"

import CreateCurso from './CreateCurso'
import DeleteCurso from "./DeleteCurso"
import GetCurso from "./GetCurso"
import ListCursos from "./ListCursos"
import UpdateCurso from "./UpdateCurso"
import AddMateria from "./AddMateria"
import RemoveMateria from "./RemoveMateria"

type CursoDeps = {
  cursoRepo?: CursoRepository,
  conn: Connection
}

const CursoRouter: Router<CursoDeps> = (deps, options) => {
  const { conn, cursoRepo = conn.getCustomRepository(CursoRepository) } = deps

  return express
    .Router(options)
    .post("/create", CreateCurso({ cursoRepo }))
    .put("/:id", UpdateCurso({ cursoRepo }))
    .get("/", ListCursos({ cursoRepo }))
    .get("/:id", GetCurso({ cursoRepo }))
    .delete("/delete/:id", DeleteCurso({ cursoRepo }))
    .post("/add", AddMateria({ cursoRepo }))
    .delete("/remove", RemoveMateria({ cursoRepo }))
}

export default CursoRouter