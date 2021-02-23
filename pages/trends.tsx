import { GroupedNativeSelect } from "components/GroupedNativeSelect"
import rawTrends from "data/trends.json"
import { GetStaticProps } from "next"
import { chain, compose, path, prop, propEq } from "ramda"
import React, { ChangeEvent, useState } from "react"
import { findOrFirst, slugToTitle } from "../components/utils"

/**
 * Trends page! Display the trend intelligence palettes, which are grouped into
 * seasons and include purchasable colors.
 */
export default function TrendsPage({ trends }: TrendPageProps) {
  const [active, setActive] = useState<TrendPalette>(trends[0].palettes[0])
  return (
    <div>
      <h1>Trends</h1>
      <GroupedNativeSelect
        name="TrendPalettes"
        id="TrendPalettes"
        value={active.title}
        onChange={compose(setActive, matchPaletteTitle(trends))}
        optGroups={paletteListFromTrends(trends)}
      />
      <p>Currently selected palette is {active.title}</p>
    </div>
  )
}

type TrendPageProps = { trends: TrendSeason[] }
export const getStaticProps: GetStaticProps<TrendPageProps> = async (
  context
) => ({ props: { trends: cleanTrends(rawTrends as RawTrends) } })

// Clean up the raw trend JSON to a format that seperates out the
// season-level metadata, and formats the season names
const cleanTrends = (json: RawTrends) =>
  Object.entries(json).map(([slug, palettes]) => {
    let meta: TrendSeasonMeta = {
      ...palettes[0], // The first palette contains the metadata for the entire season
      seasonSlug: slugToTitle(slug),
    }
    return { meta, palettes: palettes as TrendPalette[] }
  }) as TrendSeason[]

// Take a palette title from a dom event and return the full palette, or the first palette
const matchPaletteTitle = (trendSeasons: TrendSeason[]) => (
  event: ChangeEvent<HTMLSelectElement>
) => findOrFirst(matchTitleFromChangeEvent(event), getPalettes(trendSeasons))

const paletteListFromTrends = (trends: TrendSeason[]) =>
  trends.map((i) => [
    i.meta.seasonSlug,
    i.palettes.map((i) => i.title),
  ]) as SelectOptionGroup[]

const getPalettes = chain<TrendSeason, TrendPalette>(prop("palettes"))
const matchTitle = propEq("title")
const targetValue = path<string>(["target", "value"])
const matchTitleFromChangeEvent = compose(matchTitle, targetValue)
