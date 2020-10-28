import Image from "next/image"
import { Footer } from "components/Footer"
import { Header } from "components/Header"

export default function Home() {
  return (
    <div className="app">
      <Header />
      <main className="w-screen">
        <Image
          className="block"
          src="/hero.jpg"
          width="2917 "
          height="1223"
          priority
          quality={90}
        />
      </main>
      <Footer />
    </div>
  )
}
