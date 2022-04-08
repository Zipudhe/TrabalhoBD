import express, { Router as ExpressRouter, RouterOptions } from 'express'
import { Connection } from "typeorm"

import AlunoRouter from './Aluno'
import MateriaRouter from './Materia'


export interface RouterDeps {
  conn: Connection
}

export interface Router<Deps extends RouterDeps> {
  (deps: Deps, options?: RouterOptions): ExpressRouter
}

const defaultOptions: RouterOptions = {
  mergeParams: true
}

interface BaseRouterDeps {
  conn: Connection
}

const Routes: Router<BaseRouterDeps> = ({ conn }, options = defaultOptions) => express.Router(options)
  .get("/ping", (_req, res) => res.json("pong"))
  .use("/aluno", AlunoRouter({ conn }, options))


export default Routes