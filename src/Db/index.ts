import "reflect-metadata"
import { createConnection } from "typeorm"

import { getConfig } from "./config"

export const Db = () => createConnection(getConfig())
  .then(conn => ({conn}))

export default Db