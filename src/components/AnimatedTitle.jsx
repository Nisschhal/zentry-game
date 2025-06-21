import gsap from "gsap"
import React, { useEffect, useRef } from "react"

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      })
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      })
      return () => ctx.revert()
    }, containerRef)
  }, [])
  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((word, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap  gap-2 px-10 md:gap-3"
        >
          {word.split(" ").map((char, index) => (
            <span
              key={index}
              className="animated-word special-font font-zentry font-black opacity-0"
              dangerouslySetInnerHTML={{ __html: char }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default AnimatedTitle
