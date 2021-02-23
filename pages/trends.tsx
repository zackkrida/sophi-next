import { GroupedNativeSelect } from "components/GroupedNativeSelect"
import trendsJSON from "data/trends.json"
import { GetStaticPaths, GetStaticProps } from "next"
import { chain, compose, path, prop, propEq } from "ramda"
import React, { ChangeEvent, useState } from "react"
import { findOrFirst, slugToTitle } from "../components/utils"

export default function TrendsPage({ trends }: TrendPageProps) {
  const [active, setActive] = useState<TrendPalette>(trends[0].palettes[0])
  return (
    <div>
      <h1>Trends</h1>
      <TrendSelect value={active} onChange={setActive} trends={trends} />
      <p>Currently selected palette is {active.title}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps<TrendPageProps> = async (
  context
) => {
  return {
    props: { trends: cleanTrends(trendsJSON) },
  }
}

const cleanTrends = (json: RawTrends) =>
  Object.entries(json).map(([key, i]) => {
    let meta: TrendSeasonMeta = { ...i[0], seasonSlug: key }
    return { meta, palettes: i } as TrendSeason
  }) as TrendSeason[]

const TrendSelect = ({ trends, value, onChange }: TrendSelectProps) => (
  <GroupedNativeSelect
    name="TrendPalettes"
    id="TrendPalettes"
    value={value.title}
    onChange={compose(onChange, matchPaletteTitle(trends))}
    optGroups={paletteListFromTrends(trends)}
  />
)

const paletteListFromTrends = (trends: TrendSeason[]) =>
  trends.map((i) => [
    slugToTitle(i.meta.seasonSlug),
    i.palettes.map((i) => i.title),
  ]) as SelectOptionGroups

const getPalettes = chain<TrendSeason, TrendPalette>(prop("palettes"))
const matchTitle = propEq("title")
const targetValue = path<string>(["target", "value"])
const matchTitleFromChangeEvent = compose(matchTitle, targetValue)

// Take a palette title from a dom event and return the full palette
const matchPaletteTitle = (trendSeasons: TrendSeason[]) => (
  event: ChangeEvent<HTMLSelectElement>
) => findOrFirst(matchTitleFromChangeEvent(event), getPalettes(trendSeasons))

interface TrendSelectProps {
  value: TrendPalette
  trends: TrendSeason[]
  onChange: (value: TrendPalette) => void
}
interface TrendPageProps {
  trends: TrendSeason[]
}
type SelectOptionGroups = [string, string[]][]
