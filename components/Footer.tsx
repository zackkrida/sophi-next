import Link, { LinkProps } from "next/link"
import { Logo } from "./Logo"

export function Footer() {
  const internalLinks = {
    Sophicolor: [
      { label: "About", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms" },
    ],
  }

  return (
    <>
      <div>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
              <span className="block">Ready to shop?</span>
              <span className="block text-indigo-600">
                Browse the collections now.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <Link href="/our-products">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/our-products"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Shop Collections
                  </a>
                </div>
              </Link>
              <Link href="/collections">
                <div className="ml-3 inline-flex rounded-md shadow">
                  <a
                    href="/collections"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Shop Colors
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
            <div className="mb-8 mt-6 xl:mt-0">
              <div className="w-44">
                <Logo />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 gap-8 xl:col-span-4 space-y-6 md:space-y-0">
              <div>
                <address className="font-normal not-italic">
                  Precision Textile Color Inc.
                  <br />
                  244 Liberty Street, Suite 4<br />
                  Brockton, MA 02301
                </address>
                <a className="mt-4 block" href="tel:5088976620">
                  508-897-6620
                </a>
                <a className="block" href="mailto:info@sophicolor.com">
                  info@sophicolor.com
                </a>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
                {Object.entries(internalLinks).map(([title, links]) => (
                  <div key={title} className="md:mb-0">
                    <FooterSubhead>{title}</FooterSubhead>
                    <ul className="mt-4 space-y-2 md:space-y-4">
                      {links.map((i) => (
                        <li key={i.label}>
                          <FooterLink {...i} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between xl:mt-0">
            <div className="space-y-2">
              <FooterSubhead>Subscribe to our newsletter</FooterSubhead>
              <p className="text-base leading-6">
                Stay on top of the latest in color.
              </p>
            </div>
            <FooterForm />
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a
                href="https://www.facebook.com/Sophicolorcom-154922334533507/"
                className="hover:text-gray-300"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/sophicolor"
                className="hover:text-gray-300"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/sophicolor/"
                className=" hover:text-gray-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6 p-0.5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 526 526"
                >
                  <path d="M475.074 0H36.926C16.53 0 0 16.531 0 36.926v438.148C0 495.47 16.531 512 36.926 512h438.148C495.47 512 512 495.469 512 475.074V36.926C512 16.53 495.469 0 475.074 0zM181.61 387h-62.347V199.426h62.347zm-31.172-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
              &copy; 2019-{new Date().getFullYear()} Precision Textile Color.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

function FooterForm() {
  return (
    <form
      className="sm:flex sm:max-w-md validate"
      method="post"
      id="hub-form"
      name="hub-form"
      target="_blank"
      noValidate
    >
      <label htmlFor="emailAddress" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="emailAddress"
        required
        className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base leading-6 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs"
        placeholder="Enter your email"
      />
      <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          className="w-full bg-gray-400 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base leading-6 font-medium  hover:bg-gray-500 focus:outline-none focus:border-gray-600 focus:shadow-outline-gray active:bg-gray-600 transition duration-150 ease-in-out"
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}

function FooterSubhead({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm leading-5 font-semibold text-white tracking-wider uppercase">
      {children}
    </h4>
  )
}

function FooterLink({ label, ...props }: { label: string } & LinkProps) {
  return (
    <Link {...props}>
      <a className="text-base leading-6 hover:underline">{label}</a>
    </Link>
  )
}
