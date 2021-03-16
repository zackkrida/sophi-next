import Link from "next/link"

function ForVendorsPage() {
  return (
    <div>
      <div className="bg-white">
        <div className="bg-purple-800 shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-light text-white sm:text-4xl">
                <span className="block">Online Vendor Ordering.</span>
                <span className="block">
                  Access Your Customer's Color Standards.
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-purple-200">
                Vendors must register to be able to access their clients'
                standards and custom color lines. Your color purchases include
                recipes and spectral data.
              </p>
              <p className="mt-4 text-lg leading-6 text-purple-200">
                If you have already registered, sign in to order colors. Contact
                us with any questions.
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
            <h2 className="text-3xl font-light text-gray-900">
              All-in-one platform
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Mills and vendors can conveniently purchase a customer's colors
              directly from Sophicolor. This streamlines the distribution of
              colors globally.
            </p>
          </div>
          <ul className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            <CheckedFact copy="Spectral data downloaded directly from vendor order" />
            <CheckedFact copy="Customized standard cards with client logo and information" />
            <CheckedFact copy="Vendor orders shipped same day received, M-F" />
            <CheckedFact copy="Vendor may choose their shipping preferences" />
            <CheckedFact copy="Tracking for all orders online" />
            <CheckedFact copy="Easy-to-use interface for ordering" />
          </ul>
        </div>
      </div>

      <div className="relative bg-black">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=1lxHiGFkYZ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
            alt=""
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Our Team
            </h2>
            <p className="mt-2 text-white text-3xl font-light sm:text-4xl">
              We're here to help
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Our team is comprised of artists, technical colorists, and
              generally people who love color. We have a passion for what we do
              and are just as passionate about serving our clients. It is a
              colorful world. We are here to help you realize your design
              inspirations with fast service, support, providing digital data
              and recipes.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link href="/about">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    Learn More
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
    </div>
  )
}

export function CheckedFact({ copy }: { copy: string }) {
  return (
    <li className="flex">
      {/* <!-- Heroicon name: outline/check --> */}
      <svg
        className="flex-shrink-0 h-6 w-6 text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          stroke-linejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <div className="ml-3">
        <p className="text-lg leading-6 font-medium text-gray-900">{copy}</p>
      </div>
    </li>
  )
}

export default ForVendorsPage
