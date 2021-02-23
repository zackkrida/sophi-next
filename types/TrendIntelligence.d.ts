type RawTrends = { [key: string]: RawTrend[] }
type RawTrend = PartialPartial<TrendPalette, "colorDetails" | "colors">

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
  colorDetails: string
  colors: TrendColor[]
}

interface TrendColor {
  name: string
  number: string
}
