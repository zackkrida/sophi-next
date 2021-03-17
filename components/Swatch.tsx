import { UIColor } from "data/db"

const Swatch = {
  Swatch({ color }: { color: UIColor }) {
    return (
      <div
        style={{ backgroundColor: `#${color.hex}` }}
        className="flex flex-col justify-end items-center text-center shadow-md hover:shadow-lg rounded-md w-full text-sm transform-gpu
transition-shadow ease-in-out group"
      >
        <div className="bg-white rounded-b w-full p-2">
          <span className="block nums-tabular">{color.number}</span>
          {color.name}
        </div>

        <div className="absolute w-full h-full flex flex-col justify-center items-center bg-white border border-gray-200 rounded invisible group-hover:visible group-focus:visible">
          <button className="rounded-t block appearance-none flex-1 font-medium border-b border-gray-200 w-full hover:bg-black focus:bg-black hover:text-white focus:text-white">
            Add to Cart
          </button>
          <button className="rounded-b w-full block appearance-none flex-1 font-medium hover:bg-black focus:bg-black hover:text-white focus:text-white">
            Add to Favorites
          </button>
        </div>
      </div>
    )
  },
  Row({ color }: { color: UIColor }) {
    return (
      <div
        style={{ backgroundColor: `#${color.hex}` }}
        className="flex justify-between items-end group text-sm overflow-hidden"
      >
        <div className="mx-2 mt-3 group-hover:shadow-lg transform-gpu translate-y-2 group-hover:translate-y-1 transition-transform ease-in-out rounded-t p-2 pb-3 w-64 shadow-md truncate bg-white block">
          <span className="nums-tabular mr-2">{color.number}</span>
          {color.name}
        </div>
        <footer className="space-x-4 mx-2 mt-2 rounded-t p-2 pb-1 bg-white">
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

export default Swatch
