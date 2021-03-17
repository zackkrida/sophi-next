import { Color, colors as getColors, UIColor } from "data/db"
import { GetStaticProps } from "next"
import {
  compose,
  uniq,
  pluck,
  groupBy,
  prop,
  map,
  filter,
  propEq,
  replace,
  split,
  head,
  tail,
  evolve,
  assoc,
  last,
  pick,
  join,
} from "ramda"
import { useEffect, useState } from "react"
import Swatch from "components/Swatch"
import { SwatchStyles } from "types/DB"

const unslug = compose(replace(/_/g, " "))

const colorNumber = compose<string, string, string[], string>(
  head,
  split(/\s(.+)/),
  unslug
)

const colorName = compose<string, string, string[], string[], string>(
  join(""),
  tail,
  split(/\s(.+)/),
  unslug
)

const addColorNumber = (color: Color) =>
  assoc("number", colorNumber(color.name), color)

const sophiColorToUIColor = compose<
  Color,
  Record<"number", string> & Color,
  UIColor,
  UIColor
>(evolve({ name: colorName }), pick(["name", "number", "hex"]), addColorNumber)

const renderSwatch = (swatchStyle: SwatchStyles) => (color: UIColor) => {
  switch (swatchStyle) {
    case SwatchStyles.Swatch:
      return <Swatch.Swatch color={color} />
    case SwatchStyles.Row:
      return <Swatch.Row color={color} />
  }
}

const getActiveColors = (
  stackName: string,
  collectionName: string,
  colors: Color[]
) =>
  compose(
    filter(propEq("stack", stackName)),
    // @ts-ignore
    filter(propEq("collection", collectionName))
    // @ts-ignore
  )(colors) ?? colors

export default function ShopPage({
  colors,
  collections,
}: {
  colors: any
  collections: any
}) {
  const [currentSwatchStyle, setCurrentSwatchStyle] = useState(
    SwatchStyles.Swatch
  )
  const [currentCollection, setCurrentCollection] = useState(
    Object.keys(collections)[0]
  )
  const [currentStack, setCurrentStack] = useState<string>()
  const [currentColors, setCurrentColors] = useState<Color[]>()

  useEffect(() => {
    setCurrentStack(collections[currentCollection][0])
  }, [currentCollection])

  useEffect(() => {
    // @ts-ignore
    setCurrentColors(getActiveColors(currentStack, currentCollection, colors))
  }, [currentStack])

  const activeClass = (value: string) =>
    value === currentCollection ? "text-red-500" : ""

  const activeStackClass = (value: string) =>
    value === currentStack ? "text-red-500" : ""

  const activeSwatchStyleClass = (value: string) =>
    value === currentSwatchStyle ? "text-red-500" : ""

  return (
    <div>
      <div className="sticky flex justify-between top-0 border-b border-gray-200 p-2 z-10 text-sm font-medium bg-white">
        <div>Settings</div>
        <div className="flex">
          View:
          <nav className="flex space-x-2 px-2">
            {Object.values(SwatchStyles).map((i) => (
              <button
                key={i}
                onClick={() => setCurrentSwatchStyle(i)}
                className={`${activeSwatchStyleClass(i)} font-medium`}
              >
                {i}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex">
        <aside className="w-48 sticky top-0 py-10 px-4 h-full border-r border-gray-200 flex flex-col justify-start">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Collections
          </h2>

          <ul className="text-sm mb-8">
            {Object.keys(collections).map((i) => (
              <li key={i}>
                <button
                  onClick={() => setCurrentCollection(i)}
                  className={`appearance-none ${activeClass(i)}`}
                >
                  {i}
                </button>
              </li>
            ))}
            <li className="inline-flex items-center justify-center">
              <button
                onClick={() => setCurrentCollection("favorites")}
                className={`appearance-none inline-flex items-center ${activeClass(
                  "favorites"
                )}`}
              >
                <svg
                  className="w-3 h-3 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                View Favorites
              </button>
            </li>
          </ul>

          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Stacks
          </h2>
          <ul className="overflow-y-scroll h-56 text-sm">
            {Object.values(collections[currentCollection]).map(
              (i) =>
                i &&
                typeof i === "string" && (
                  <li key={i}>
                    <button
                      onClick={() => setCurrentStack(i)}
                      className={`appearance-none ${activeStackClass(i)}`}
                    >
                      {i}
                    </button>
                  </li>
                )
            )}
          </ul>
        </aside>

        <main className="flex-grow bg-gray-100">
          <div
            className={
              currentSwatchStyle === SwatchStyles.Row
                ? ""
                : "swatch-grid grid grid-flow-row grid-cols-4 gap-4 p-4"
            }
          >
            {currentColors?.map(
              compose(renderSwatch(currentSwatchStyle), sophiColorToUIColor)
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

const getCollections = compose(
  map(compose<Color[], String[], String[]>(uniq, pluck("stack"))),
  // @ts-ignore
  groupBy(prop("collection"))
)

export const getStaticProps: GetStaticProps = async (context) => {
  const colors = await getColors.select()
  // @ts-ignore
  const collections = getCollections(colors)

  return {
    revalidate: 1,
    props: {
      collections,
      colors,
    },
  }
}
