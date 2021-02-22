import Image from "next/image"
import Link from "next/link"

function ForDesignersPage() {
  return (
    <div>
      <div className="bg-white">
        <div className="bg-black shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Sophicolor For Designers.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-300">
                The total textile color management service.
              </p>
              <a
                href="#"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-black hover:bg-purple-50"
              >
                Sign up for free
              </a>
              <a
                href="#"
                className="ml-4 mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-black hover:bg-purple-50"
              >
                Sign in
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Sophicolor Services
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We serve fashion and home companies from startups to the biggest
              retail brands in the world. We’re a one stop shop for all your
              color needs.
            </p>
          </div>
          <ul className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 text-center">
            <CheckedFact
              title="Sophicolor Color Collections"
              copy="We have 3 collections of 1500 cotton colors each, Earthen, Celestial, and Botanical. Colors are presented in archival quality box sets, index books or individual swatches. neons and sport-inspired nylon collections are also available."
            />

            <CheckedFact
              title="Color Archive"
              copy="If you don’t find your desired shade in Sophicolor, we search our extensive archive of 25,000+ shades for your match, potentially saving you the cost of custom dyeing."
            />

            <CheckedFact
              title="Custom Color Dyeing"
              copy="We cost effectively dye your unique color lines from scratch and develop global color standards."
            />

            <CheckedFact
              title="Color Communication"
              copy="We provide the recipe and spectral data for FREE on all your colors, shortening lead times and increasing accuracy. We also provide FREE Adobe .ase swatch exchange codes."
            />

            <CheckedFact
              title="Adopt-a-Color Management"
              copy="Let us do the work. We will store, tag and seamlessly ship your color standards directly to your global supply chain, saving lead time and money. Vendors can also set up an account and buy your standards directly."
            />

            <CheckedFact
              title="Free Color Trend Forecast"
              copy="We offer FREE digital access to our seasonal color trend forecasts. Actual palettes are available for purchase."
            />
          </ul>
        </div>
      </div>

      <div className="relative bg-black">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-7/12">
          <div className="w-full h-full">
            <Image
              alt="A woman leans on a man sitting behind her"
              src="/trends/latest-cover.jpg"
              layout="fill"
              className="object-cover object-left-top"
            />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-5/12 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Spring/Summer 2022
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Color Trend Forecasts
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Sophicolor offers free digital seasonal trend forecasts, available
              18 months before the season. These exciting forecasts include
              suggested palettes for purchase.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link href="/trends">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    See the Trends
                    <svg
                      className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-black">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:h-full md:w-7/12">
          <div className="w-full h-full">
            <Image
              alt="A woman leans on a man sitting behind her"
              src="/for-designers-2.jpg"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:mr-auto md:w-5/12 md:pr-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Intuitive User Interface
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Darhboard Features
            </p>
            <p className="mt-3 text-lg text-gray-300"></p>
            <ul className="text-gray-300 list-inside list-disc mt-4">
              <li>Easy shopping &amp; fast response time </li>
              <li>Confidential color palette storage </li>
              <li>Controlled access to your company’s colors</li>
              <li>Customized naming, season and client numbers </li>
              <li>Adopt-a-Color vendor ordering distribution service </li>
              <li>
                Order history and tracking directly from your account page
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Wrapper */}
    </div>
  )
}

export function CheckedFact({ title, copy }) {
  return (
    <li className="flex">
      <div className="ml-3">
        <dt className="text-lg leading-6 font-bold text-gray-900">{title}</dt>
        <dd className="mt-2 text-base text-gray-500">{copy}</dd>
      </div>
    </li>
  )
}

export default ForDesignersPage
