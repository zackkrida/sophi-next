import Link from "next/link"
import React, { useState } from "react"
import { AlertBanner } from "./AlertBanner"
import { Logo } from "./Logo"

export function Header() {
  const [showAlert, setShowAlert] = useState(true)
  const hideAlert = () => setShowAlert(false)

  return (
    <div>
      {showAlert && (
        <AlertBanner
          text={"Big news! We're excited to announce a brand new product."}
          textMobile={"We announced a new product!"}
          onDismiss={hideAlert}
          action={
            <Link href="our-products">
              <a className="text-black font-bold underline focus:outline-none focus:ring-2 focus:ring-black p-2 rounded-md">
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </Link>
          }
        />
      )}

      <header className="z-0 relative bg-black">
        <div className="relative z-10 shadow">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 lg:justify-start lg:space-x-8">
            <div>
              <Link href="/">
                <a className="flex text-white w-44">
                  <Logo />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
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
            <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between lg:space-x-8 uppercase">
              <nav className="flex space-x-6 text-sm tracking-wider">
                <HeaderDropdownLink href="/shop" items={[]}>
                  Shop
                </HeaderDropdownLink>
                <HeaderLink href="/for-designers">What We Do</HeaderLink>
                <HeaderLink href="/trends">Trends</HeaderLink>
                <HeaderLink href="/for-vendors">Vendors</HeaderLink>

                <HeaderLink href="/about">About Us</HeaderLink>
              </nav>

              {/* Menu End */}
              <div className="flex items-center space-x-6 text-sm">
                <HeaderLink href="/sign-in">Sign In</HeaderLink>
                <span className="inline-flex rounded-md shadow-sm">
                  <Link href="/sign-up">
                    <a className="inline-flex items-center justify-center px-4 py-2 border border-transparent  leading-6 font-medium rounded-md bg-white text-purple-700 hover:bg-purple-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 hover:text-white transition ease-in-out duration-150">
                      Sign up
                    </a>
                  </Link>
                </span>
                <HeaderLink href="/cart">
                  Cart
                  <span className="relative">
                    <svg
                      className="w-6 h-6 fill-current ml-2 -mt-1"
                      enableBackground="new 0 0 489 489"
                      version="1.1"
                      viewBox="0 0 489 489"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m440.1 422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6c-0.8-52.6-43.8-95.1-96.6-95.1s-95.8 42.5-96.6 95.1h-57.6c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 0.4-0.1 0.8-0.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-0.4 0-0.8-0.1-1.2zm-195.6-395.7c37.9 0 68.8 30.4 69.6 68.1h-139.2c0.8-37.7 31.7-68.1 69.6-68.1zm122.3 435h-244.6c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-0.4 20.7-21.1 37.5-46.4 37.5z"></path>
                    </svg>
                    <span
                      style={{ fontSize: "0.8rem", fontWeight: "bold" }}
                      className="absolute ml-1 top-0 w-full text-center"
                    >
                      0
                    </span>
                  </span>
                </HeaderLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

function HeaderLink({ href, children }: HeaderLinkProps) {
  return (
    <Link href={href}>
      <a className="leading-6 font-medium text-white focus:outline-none focus:text-gray-200 transition ease-in-out duration-150 inline-flex justify-center items-center">
        {children}
      </a>
    </Link>
  )
}

function HeaderDropdownLink({
  href,
  children,
  items = [],
}: HeaderDropdownLinkProps) {
  return (
    <div className="relative">
      <Link href={href}>
        <button
          type="button"
          className="text-white tracking-wider group inline-flex items-center space-x-2 leading-6 font-medium focus:outline-none focus:text-gray-200 transition ease-in-out duration-150 uppercase"
        >
          <a href={href}>{children}</a>
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
      </Link>
    </div>
  )
}

interface HeaderLinkProps {
  href: string
  children: React.ReactNode
}

type HeaderDropdownLinkProps = { items: any[] } & HeaderLinkProps
