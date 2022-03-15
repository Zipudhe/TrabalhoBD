import { ConnectionOptions } from "typeorm"
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions"

const checkDbBundle = () => process.env.IS_SERVING_BUNDLE == "true" ? 'dist' : 'src'

export const getDbConfig: () => MysqlConnectionOptions = () => {
  const sslConfig = {
    rejectUnauthorized: false
  }

  const baseConfig: { type: "mysql" } & any = {
    type: "mysql",
    sslConfig
  }

  if(process.env.DATABASE_URL) {
    return {
      ...baseConfig,
      url: process.env.DATABASE_URL
    }
  }

  if(process.env.DB_NAME && process.env.DB_USER && process.env.DB_PASS && process.env.DB_HOST)
    return {
      ...baseConfig,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT ?? 3306) || undefined,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    }

    throw new Error("Configuração do banco de dados invalida")
}

export const getTypeOrmConfig = () => {
  const root = checkDbBundle()

  return {
    syncronize: process.env.IS_SERVING_BUNDLE !== "true" && process.env.NODE_ENV !== "production",
    loggin: false,

    migrations: [
      `${root}/Migration/**/*{.js,.ts}`
    ],

    subscribers: [
      `${root}/Subscriber/**/*{.js,.ts}`
    ],

    entities: [
      `${root}/Entity/**/*{.js,.ts}`
    ],

    cli: {
      entitiesDir: `${root}/Entity`,
      migrationsDir: `${root}/Migration`,
      subscribersDir: `${root}/subscribers`
    }
  }
}

export const getConfig = () => {
  return {
    ...getDbConfig(),
    ...getTypeOrmConfig()
  }
}