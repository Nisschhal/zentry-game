import Hero from "./sections/Hero.jsx"
import About from "./sections/About.jsx"

import { ScrollTrigger } from "gsap/all"
import { gsap } from "gsap"
const App = () => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  )
}

export default App
