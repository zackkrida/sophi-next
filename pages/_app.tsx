import { Footer } from "components/Footer"
import { Header } from "components/Header"
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="w-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
