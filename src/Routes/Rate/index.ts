import { Connection } from 'typeorm'
import express from 'express'
import { Router } from 'Routes'

import { RateRepository } from "Repository/RateRepository"

import CreateRate from "./CreateRate"
import DeleteRate from "./DeleteRate"
import ListRate from "./ListRate"
import UpdateRate from "./UpdateRate"
import GetRate from "./GetRate"

type RateDeps = {
  rateRepo?: RateRepository,
  conn: Connection
}

const RateRouter: Router<RateDeps> = (deps, options) => {
  const { conn, rateRepo = conn.getCustomRepository(RateRepository) } = deps

  return express
    .Router(options)
      .post("/create", CreateRate({ rateRepo }))
      .delete("/:id", DeleteRate({ rateRepo }))
      .get("/", ListRate({ rateRepo }))
      .put("/:id", UpdateRate({ rateRepo }))
      .get("/:id", GetRate({ rateRepo }))
}

export default RateRouter