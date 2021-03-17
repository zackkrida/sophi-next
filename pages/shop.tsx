import { Color, colors as getColors } from "data/db"
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
} from "ramda"
import { useEffect, useState } from "react"

export enum SwatchStyles {
  row = "ROW",
  swatch = "SWATCH",
}

const unslug = compose(replace(/_/g, " "))

// @ts-ignore
const colorNumber = compose(head, split(/\s(.+)/), unslug, prop("name"))

// @ts-ignore
const colorName = compose(tail, split(/\s(.+)/), unslug, prop("name"))

const Swatch = {
  Swatch({ color }: { color: Color }) {
    return (
      <div
        style={{ backgroundColor: `#${color.hex}` }}
        className="flex flex-col justify-center items-center text-center shadow-md rounded-md w-full"
      >
        {/* // @ts-ignore */}
        {colorNumber(color)}
        <br />
        {/* // @ts-ignore */}
        {colorName(color)}
      </div>
    )
  },
  Row({ color }: { color: Color }) {
    return (
      <div
        style={{ backgroundColor: `#${color.hex}` }}
        className="flex justify-between items-center p-2"
      >
        <div>
          <span>{colorNumber(color)}</span> | {colorName(color)}
        </div>
        <footer className="space-x-4">
          <button>
            <span className="sr-only">Add to cart</span>
            <svg
              className="fill-current w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button>
            <span className="sr-only">Favorite</span>
            <svg
              className="fill-current w-4 h-4"
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
          </button>
        </footer>
      </div>
    )
  },
}

const renderSwatch = (swatchStyle: SwatchStyles) => (color: Color) => {
  switch (swatchStyle) {
    case SwatchStyles.swatch:
      return (
        <li className="flex items-stretch">
          <Swatch.Swatch color={color} />
        </li>
      )
    case SwatchStyles.row:
      return (
        <li>
          <Swatch.Row color={color} />
        </li>
      )
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
  const [currentSwatchStyle, setCurrentSwatchStyle] = useState(SwatchStyles.row)
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
      <div className="sticky flex justify-between top-0 bg-gray-400 p-2 z-10">
        <div>Settings</div>
        <div className="flex">
          View:
          <nav className="flex space-x-2 px-2">
            {Object.values(SwatchStyles).map((i) => (
              <button
                key={i}
                onClick={() => setCurrentSwatchStyle(i)}
                className={`${activeSwatchStyleClass(i)}`}
              >
                {i}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex">
        <aside className="w-48 sticky top-0 pt-10 p-2 h-screen">
          <h2 className="text-lg">Collections</h2>
          <ul className="overflow-y-scroll h-52">
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
          </ul>

          <h2 className="text-lg">Stacks</h2>
          <ul className="overflow-y-scroll h-52">
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

        <main className="flex-grow">
          <ul
            className={
              currentSwatchStyle === SwatchStyles.row
                ? ""
                : "swatch-grid grid grid-flow-row grid-cols-4 gap-4 p-4"
            }
          >
            {currentColors?.map(renderSwatch(currentSwatchStyle))}
          </ul>
        </main>
      </div>
    </div>
  )
}

type composedFns = (thing: any) => any

const getCollections: composedFns = compose(
  // @ts-ignore
  map(compose(uniq, pluck("stack"))),
  // @ts-ignore
  groupBy(prop("collection"))
)

export const getStaticProps: GetStaticProps = async (context) => {
  const colors = await getColors.select()
  const collections = getCollections(colors)

  return {
    revalidate: 1,
    props: {
      collections,
      colors,
    },
  }
}
