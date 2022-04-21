import { Request } from "express"

export type QueryType = { [key: string]: undefined | string | string[] | QueryType | QueryType[] | number }
export type ParamsType =  { [index: string | number ]: string | number; }
export type BodyType = object
export type ReqObjExtType = object

export type Optional<T extends object> = {
  [key in keyof T]?: T[key]
}

export type Req<
  Body extends BodyType,
  ReqObjExtension extends ReqObjExtType,
  Params extends ParamsType = {},
  Query extends QueryType = {},
> = Request<Params, {}, Record<keyof Body, any>, Query> & Optional<ReqObjExtension>