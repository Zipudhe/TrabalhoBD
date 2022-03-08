import express, { Router as ExpressRouter, RouterOptions } from 'express'
import { Connection } from "typeorm"

export interface RouterDeps {
  conn: Connection
}

export interface Router<Deps extends RouterDeps> {
  (deps: RouterDeps, options?: RouterOptions): ExpressRouter
}

const defaultOptions: RouterOptions = {
  mergeParams: true
}

interface BaseRouterDeps {
  conn: Connection
}

const Routes: Router<BaseRouterDeps> = ({ conn }, options = defaultOptions) => express.Router(options)
  .get("/ping", (_req, res) => res.json("pong"))


export default Routes