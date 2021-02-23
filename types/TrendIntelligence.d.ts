type RawTrends = { [seasonSlug: string]: RawTrend[] }
type RawTrend = PartialPartial<TrendPalette, "secondary_description", "colors">

interface TrendSeason {
  meta: TrendSeasonMeta
  palettes: TrendPalette[]
}
interface TrendSeasonMeta {
  title: string
  description: string
  seasonSlug: string
  img: string
}
interface TrendPalette {
  title: string
  img: string
  description: string
  secondary_description: string
  colors: TrendColor[]
}

interface TrendColor {
  name: string
  number: string
}
