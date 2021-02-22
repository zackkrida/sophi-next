import Link from "next/link"
import { Logo } from "./Logo"

export function Header() {
  return (
    <div>
      <AnnouncementBanner />

      <header className="z-0 relative bg-black">
        <div className="relative z-10 shadow">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
            <div>
              <Link href="/">
                <a className="flex text-white w-44">
                  <Logo />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-500 focus:outline-none focus:bg-gray-500 active:bg-gray-600 focus:text-white transition duration-150 ease-in-out"
              >
                {/* Heroicon name: menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
              <nav className="flex space-x-10 text-sm tracking-wider uppercase">
                <HeaderLink href="/for-vendors">Vendors</HeaderLink>

                <div className="relative">
                  {/* Item active: "text-gray-900", Item inactive: "text-white" */}
                  <button
                    type="button"
                    className="text-white uppercase tracking-wider group inline-flex items-center space-x-2  leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                  >
                    <span>Solutions</span>
                    {/*
                Heroicon name: chevron-down

                Item active: "text-gray-600", Item inactive: "text-white"
              */}
                    <svg
                      className="text-white h-5 w-5 group-hover:text-white group-focus:text-white transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <a
                  href="#"
                  className="leading-6 font-medium text-white hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                >
                  Docs
                </a>
                <div className="relative">
                  {/* Item active: "text-gray-900", Item inactive: "text-white" */}
                  <button
                    type="button"
                    className="text-white group inline-flex items-center space-x-2 tracking-wider uppercase  leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                  >
                    <span>Menu</span>
                    {/*
                Heroicon name: chevron-down

                Item active: "text-gray-600", Item inactive: "text-white"
              */}
                    <svg
                      className="text-white h-5 w-5 group-hover:text-white group-focus:text-white transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </nav>
              <div className="flex items-center space-x-8">
                <a
                  href="#"
                  className="leading-6 font-medium text-white hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                >
                  Sign in
                </a>
                <span className="inline-flex rounded-md shadow-sm">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent  leading-6 font-medium rounded-md bg-white text-purple-700 hover:bg-purple-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    Sign up
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

function AnnouncementBanner() {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <div className="relative bg-yellow-400 text-black">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-black">
            <span className="md:hidden">We announced a new product!</span>
            <span className="hidden md:inline">
              Big news! We're excited to announce a brand new product.
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <a
                href="#"
                className="text-black font-bold underline focus:outline-none focus:ring-2 focus:ring-black"
              >
                {" "}
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-black fill-current"
          >
            <span className="sr-only">Dismiss</span>
            {/* <!-- Heroicon name: outline/x --> */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

function HeaderLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="leading-6 font-medium text-white hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
        {children}
      </a>
    </Link>
  )
}
