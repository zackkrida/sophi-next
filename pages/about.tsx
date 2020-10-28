import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover object-center lg:absolute lg:h-full bg-black"
            src="/color-hall.jpg"
            unsized={true}
            alt="A narrow hallway steeped in vibrant colors"
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <p className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Leading experts in color
            </p>
            <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              About Sophicolor
            </h1>
            <p className="text-lg leading-7 text-gray-500 mb-5">
              Sophicolor offers extensive color swatch collections, custom
              dyeing and global color management services for textile colors,
              specifically for apparel, footwear, accessories, soft goods, home
              and interiors.
            </p>
            <div className="prose text-gray-500">
              <p>
                Designers use Sophicolor to source their color standards,
                economically dye custom color lines and to manage their colors
                directly with mills and vendors globally. As a one stop shop for
                all your color needs, we offer a comprehensive color management
                service or buy a la carte. Sophicolor works with many of the
                biggest and best brands in the world.
              </p>
              <p>
                We have the largest selection of cotton textile colors (4500) in
                the market and an archive of an additional 25,000+. We also
                offer synthetic neons and sport-inspired standards in nylon, for
                athletic and intimate apparel. Colors are available in
                libraries, index books and individual swatches.
              </p>
              <p>
                <b>Founder and CEO Mary Vigeant</b> spent years working in
                apparel color development labs where she worked alongside
                fashion designers, developing seasonal color lines. She learned
                their process, the need for colors specifically created for
                textiles, shorter lead times and highly responsive customer
                service.
              </p>
              <p>
                In 2005, Mary took that insight and expertise and founded
                Sophicolor, as Precision Textile Color. It started as a custom
                dye house for the development of apparel color standards for the
                women’s and men’s markets.
              </p>
              <p>
                After developing countless colors, she foresaw a unique
                opportunity to use her massive archive to create exciting new
                color libraries for the textile-based fashion and home
                industries. She could offer more choice to designers with
                limited market options. This was a first in the color
                development industry, new libraries were developed from colors
                originally designed for apparel.
              </p>
              <p>
                Being the first in the US to use advanced <b>ChromaShare</b>{" "}
                technology, they measured 6000+ colors, and culled them down to
                4500 extraordinary colors that are now the Sophicolor
                Collections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
