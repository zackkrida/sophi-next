import { Footer } from "components/Footer"
import { Header } from "components/Header"
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Header />
      <main className="w-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
