type Predicate = (a: any) => boolean
type PartialPartial<T, K extends keyof T> = Omit<T, K> & Partial<T>

type SelectOptionGroup = [string, string[]]
