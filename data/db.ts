import { knex } from "knex"
export const db = knex({
  client: "pg",
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ["knex", "sophi"],
})

export interface Color {
  name: string
  hex: string
  collection: string
  stack: string
}

export const users = db("users")
export const colors = db<Color>("colors")
