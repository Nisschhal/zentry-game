import { useEffect, useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"
import Button from "./Button"
import { useWindowScroll } from "react-use"
import gsap from "gsap"
const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"]

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const navContainerRef = useRef(null)
  const { y: currentScrollY } = useWindowScroll()

  const [isAudioOn, setIsAudioOn] = useState(false)
  const [isIndicatorActive, setIsIndicatorActive] = useState(false)
  const audioElementRef = useRef(null)

  const toggleAudioIndicator = () => {
    setIsAudioOn((prev) => !prev)
    setIsIndicatorActive((prev) => !prev)
  }

  // Show or hide the navigation bar based on the scroll position
  useEffect(() => {
    if (!navContainerRef.current) return
    if (currentScrollY === 0) {
      setIsNavVisible(true)
      navContainerRef.current.classList.remove("floating-nav")
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false)
      navContainerRef.current.classList.add("floating-nav")
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true)
      navContainerRef.current.classList.add("floating-nav")
    }
    setLastScrollY(currentScrollY)
  }, [currentScrollY])

  // animate the nav based on nav visibility
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.1,
    })
  }, [isNavVisible])

  // Start playing audio on first user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioElementRef.current) {
        audioElementRef.current
          .play()
          .then(() => {
            setIsAudioOn(true)
            setIsIndicatorActive(true)
          })
          .catch((err) => {
            console.warn("Autoplay blocked:", err)
          })
      }

      // Remove listeners after the first interaction
      window.removeEventListener("click", handleUserInteraction)
      window.removeEventListener("mousemove", handleUserInteraction)
    }

    window.addEventListener("click", handleUserInteraction)
    window.addEventListener("mousemove", handleUserInteraction)

    return () => {
      window.removeEventListener("click", handleUserInteraction)
      window.removeEventListener("mousemove", handleUserInteraction)
    }
  }, [])

  // Audio Control based on toggle
  useEffect(() => {
    if (!audioElementRef.current) return

    if (isAudioOn) {
      audioElementRef.current.play().catch((err) => {
        console.warn("Play error on toggle:", err)
      })
    } else {
      audioElementRef.current.pause()
    }
  }, [isAudioOn])

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              title="Product"
              id="product-button"
              rightIcon={<TiLocationArrow />}
              containerClasses="bg-blue-50 md:flex hidden flex-center gap-1"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  href={`#${item.toLowerCase()}`}
                  key={index}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Audio Button */}
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex-center cursor-pointer p-2 gap-1"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                ></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
