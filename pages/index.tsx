import Image from "next/image"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Image
        className="block"
        src="/pages/home/hero.jpg"
        width="2917 "
        height="1223"
        priority
        quality={90}
      />

      <div className="relative bg-gray-50 pt-16 px-4 sm:px-6 lg:pt-12 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center lg:mb-20">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Sophicolor is the Best in Textile Color
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              We’re passionate color experts, born from fashion. Sophicolor is
              textile color development for apparel, footwear & home made easy.
              Stock colors, custom dyeing, color standard communication &
              distribution, we do it all.
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <div className="relative h-64 w-full">
                  <Image
                    className="object-cover"
                    src="/pages/home/client.jpg"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link href="/for-designers">
                    <a className="block mt-2">
                      <h2 className="text-3xl font-semibold text-gray-900">
                        For Designers
                      </h2>
                      <p className="mt-3 text-base text-gray-500">
                        Sophicolor provides color management and a la carte
                        services. Learn about our 4500 stock colors, custom
                        dyeing, color communication & management.
                      </p>
                      <a
                        className="px-4 py-2 bg-black text-white inline-block mt-4 rounded-md"
                        href="/for-designers"
                      >
                        Learn More
                      </a>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <div className="relative h-64 w-full">
                  <Image
                    className="object-cover"
                    src="/pages/home/vendor.jpg"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link href="/for-vendors">
                    <a className="block mt-2">
                      <h2 className="text-3xl font-semibold text-gray-900">
                        For Vendors
                      </h2>

                      <p className="mt-3 text-base text-gray-500">
                        We create color standards and provide formulas for mills
                        and vendors. Learn about vendor color ordering.
                        <br />
                        <br />
                      </p>
                      <a
                        className="px-4 py-2 bg-black text-white inline-block mt-4 rounded-md"
                        href="/for-vendors"
                      >
                        Learn More
                      </a>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
