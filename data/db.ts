import { Knex, knex } from "knex"
import { parse } from "pg-connection-string"
import { map, pluck, compose, evolve, unless, isNil } from "ramda"

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

export type CompanyColor =
  | {
      id: number
      name: string
      company_id: number

      hlc_number: string
      cn_number: string

      product_hex: string
      product_number: string

      order_id_created?: number

      /** @deprecated palette metadata */
      no_palette: boolean
      /** @deprecated palette metadata */
      season?: string
      /** @deprecated palette metadata */
      year?: string
      /** @deprecated palette metadata */
      brand?: string
      /** @deprecated palette metadata */
      division?: string
    }
  | Timestamps

/**
 * A unified type between company colors and colors for presentation in the UI.
 */
export type UIColor = {
  number: string
  name: string
  hex: string
}

interface Timestamps {
  created_at: Date
  deleted_at?: Date
  updated_at: Date
}

export type Company = {
  id: number
  name: string
  quickbooks_id: number
  chromashare_palette: string
  discount_percentage: number
  allow_invoice: boolean
}

const dateToISO = (date: Date) => date.toISOString()
const safeDateToISO = unless(isNil, dateToISO)

const timestampsToString = evolve({
  created_at: safeDateToISO,
  updated_at: safeDateToISO,
  deleted_at: safeDateToISO,
})

export const users = db("users")
export const colors = db<Color>("colors")
export const companyColors = db<CompanyColor>("company_colors")
export const company = db<Company>("companies")

export const colorsFromCompanies = (retailerIDs: string[]) =>
  companyColors.where("deleted_at", null).whereIn(
    "company_id",
    // @ts-ignore
    compose(map(Number), pluck("retailer_id"))(retailerIDs)
  )

// vendor company id
export const vendorRetailerColors = (vendorId: number) =>
  db("company_retailers_pivot")
    .where("company_id", vendorId)
    .select(["retailer_id"])
    .then(colorsFromCompanies)
    // @ts-ignore
    .then(map(timestampsToString))
