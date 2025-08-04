import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Competition from "./components/Competition"
import Timeline from "./components/Timeline"
import Gallery from "./components/Gallery"
import Prizes from "./components/Prizes"
import Registration from "./components/Registration"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Competition />
      <Timeline />
      <Gallery />
      <Prizes />
      <Registration />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
