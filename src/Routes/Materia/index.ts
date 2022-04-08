import { Connection } from 'typeorm'
import express from 'express'
import { Router } from 'Routes'

import { MateriaRepository } from "Repository/MateriaRepository"

import CreateMateria from "./CreateMateria"
import DeleteMateria from "./DeleteMateria"
import GetMateria from "./GetMateria"
import ListMateria from "./ListMateria"

type MateriaDeps = {
  materiaRepo?: MateriaRepository,
  conn: Connection
}

const MateriaRouter: Router<MateriaDeps> = (deps, options) => {
  const { conn, materiaRepo = conn.getCustomRepository(MateriaRepository) } = deps

  return express
    .Router(options)
      .get("/", ListMateria({ materiaRepo }))
      .post("/create", CreateMateria({ materiaRepo }))
      .get("/:id", GetMateria({ materiaRepo }))
      .delete("/:id", DeleteMateria({ materiaRepo }))
}

export default MateriaRouter