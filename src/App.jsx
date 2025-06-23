import Hero from "./sections/Hero.jsx"
import About from "./sections/About.jsx"

import { ScrollTrigger } from "gsap/all"
import { gsap } from "gsap"
import Navbar from "./components/Navbar.jsx"
import Features from "./sections/Features.jsx"
const App = () => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default App
