import { Knex, knex } from "knex"
import { parse } from "pg-connection-string"
const pgconfig = parse(process.env.PG_CONNECTION_STRING as string)

if (process.env.NODE_ENV === "production") {
  // @ts-ignore
  pgconfig.ssl = { rejectUnauthorized: false }
}

export const db = knex({
  client: "pg",
  connection: pgconfig as Knex.StaticConnectionConfig,
  searchPath: ["knex", "sophi"],
})

/**
 * A sophicolor in the main collection, NOT a company color.
 */
export interface Color {
  name: string
  hex: string
  collection: string
  stack: string
}

export const users = db("users")
export const colors = db<Color>("colors")
