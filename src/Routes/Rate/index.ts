import { Connection } from 'typeorm'
import express from 'express'
import { Router } from 'Routes'

import { RateRepository } from "Repository/RateRepository"

// import CreateMateria from "./CreateMateria"
// import DeleteMateria from "./DeleteMateria"
// import GetMateria from "./GetMateria"
// import ListMateria from "./ListMateria"

type RateDeps = {
  rateRepository?: RateRepository,
  conn: Connection
}

const MateriaRouter: Router<RateDeps> = (deps, options) => {
  const { conn, rateRepository = conn.getCustomRepository(RateRepository) } = deps

  return express
    .Router(options)
      // .get("/", ListMateria({ materiaRepo }))
      // .post("/create", CreateMateria({ materiaRepo }))
      // .get("/:id", GetMateria({ materiaRepo }))
      // .delete("/:id", DeleteMateria({ materiaRepo }))
}

export default MateriaRouter