import {
  compose,
  defaultTo,
  find,
  join,
  map,
  replace,
  split,
  toUpper,
} from "ramda"
import { useEffect } from "react"

// Oh....FP.
export function first<T>(arr: T[]) {
  return arr[0]
}

// Find a matching item from the given list, otherwise return the first item
export function findOrFirst<T>(predicate: Predicate, items: T[]) {
  return defaultTo(first(items), find(predicate, items))
}

// Keep the url hash in sync with a piece of state
export const useUrlHash = (value: string, deps: unknown[]) => {
  useEffect(() => {
    window.location.hash = value
  }, deps)
}

export const capitalize = replace(/^./, toUpper)
export const capitalizeWords = compose(join(" "), map(capitalize), split(" "))
export const slugToTitle = compose(capitalizeWords, replace(/-/g, " "))
