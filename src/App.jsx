import About from "./conponents/About"
import Conditional from "./conponents/ConditionalRendering"
import Footer from "./conponents/Footer"
import Header from "./conponents/Header"
import Hero from "./conponents/Hero"
import Loop from "./conponents/Loop"
import Project from "./conponents/Project"
import Service from "./conponents/Service"
import SortFi from "./conponents/SortFi"

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Service/>
      <Footer/>
      <SortFi/>
      <Loop/>
      <Conditional/>
    </>
  )
}

export default App
