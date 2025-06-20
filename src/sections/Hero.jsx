import { useRef, useState } from "react"
import Button from "../components/Button.jsx"
import { TiLocationArrow } from "react-icons/ti"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1)
  const [loadedVideos, setLoadedVideos] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)

  // Video Ref for next video
  const nextVideoRef = useRef(null)

  const totalVideos = 4

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1)
  }

  // 0 % 4 = 0 + 1 => 1
  // 1 % 4 = 1 + 1 => 2
  // 2 % 4 = 2 + 1 => 3
  // 3 % 4 = 3 + 1 => 4 (currentIndex)
  const nextVideoIndex = (currentVideoIndex % totalVideos) + 1

  const handleMiniVideoClick = () => {
    setHasClicked(true)
    setCurrentVideoIndex(nextVideoIndex)
    // setLoading(true)
  }
  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`

  useGSAP(
    () => {
      if (hasClicked) {
        // Set the next video to visible
        gsap.set("#next-video", {
          visibility: "visible",
        })

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.out",
          onStart: () => nextVideoRef.current.play(),
        })

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.out",
        })
      }
    },
    { dependencies: [currentVideoIndex], revertOnUpdate: true }
  )

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* Video Frame Container */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* Videos */}
        <div>
          <div className="border mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all ease-in duration-500  hover:scale-100 hover:opacity-100"
            >
              <video
                onLoadedData={handleVideoLoad}
                id="current-video"
                ref={nextVideoRef}
                // if next video is last video + 1 (out of range), go to first video
                src={getVideoSrc((currentVideoIndex % totalVideos) + 1)}
                className="size-64 object-cover scale-150 object-center"
              />
            </div>
          </div>
          {/* Background Video */}
          <video
            id="next-video"
            ref={nextVideoRef}
            src={getVideoSrc(currentVideoIndex)}
            autoPlay
            muted
            loop
            className="absolute-center invisible size-64 z-20 origin-center object-cover"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(
              !hasClicked ? currentVideoIndex : currentVideoIndex - 1
            )}
            autoPlay
            muted
            loop
            className="absolute size-full inset-0 object-cover object-center"
          ></video>
        </div>

        {/* Hero Copy: Heading */}
        {/* Top Right */}
        <div className="absolute border left-0 right-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClasses="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>

        {/* Bottom Right */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>
          ming
        </h1>
      </div>
      {/* Below Hero Copy as scroll takes away hero section */}
      <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
        G<b>a</b>
        ming
      </h1>
    </div>
  )
}

export default Hero

// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"
// import { ScrollTrigger } from "gsap/all"
// import { TiLocationArrow } from "react-icons/ti"
// import { useEffect, useRef, useState } from "react"

// import Button from "../components/Button"

// // import VideoPreview from "./VideoPreview"

// gsap.registerPlugin(ScrollTrigger)

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(1)
//   const [hasClicked, setHasClicked] = useState(false)

//   const [loading, setLoading] = useState(true)
//   const [loadedVideos, setLoadedVideos] = useState(0)

//   const totalVideos = 4
//   const nextVdRef = useRef(null)

//   const handleVideoLoad = () => {
//     setLoadedVideos((prev) => prev + 1)
//   }

//   useEffect(() => {
//     if (loadedVideos === totalVideos - 1) {
//       setLoading(false)
//     }
//   }, [loadedVideos])

//   const handleMiniVdClick = () => {
//     setHasClicked(true)

//     setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1)
//   }

//   useGSAP(
//     () => {
//       if (hasClicked) {
//         gsap.set("#next-video", { visibility: "visible" })
//         gsap.to("#next-video", {
//           transformOrigin: "center center",
//           scale: 1,
//           width: "100%",
//           height: "100%",
//           duration: 1,
//           ease: "power1.inOut",
//           onStart: () => nextVdRef.current.play(),
//         })
//         gsap.from("#current-video", {
//           transformOrigin: "center center",
//           scale: 0,
//           duration: 1.5,
//           ease: "power1.inOut",
//         })
//       }
//     },
//     {
//       dependencies: [currentIndex],
//       revertOnUpdate: true,
//     }
//   )

//   useGSAP(() => {
//     gsap.set("#video-frame", {
//       clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
//       borderRadius: "0% 0% 40% 10%",
//     })
//     gsap.from("#video-frame", {
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       borderRadius: "0% 0% 0% 0%",
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: "#video-frame",
//         start: "center center",
//         end: "bottom center",
//         scrub: true,
//       },
//     })
//   })

//   const getVideoSrc = (index) => `videos/hero-${index}.mp4`

//   return (
//     <div className="relative h-dvh w-screen overflow-x-hidden">
//       {loading && (
//         <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
//           {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
//           <div className="three-body">
//             <div className="three-body__dot"></div>
//             <div className="three-body__dot"></div>
//             <div className="three-body__dot"></div>
//           </div>
//         </div>
//       )}

//       <div
//         id="video-frame"
//         className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
//       >
//         <div>
//           <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
//             {/* <VideoPreview> */}
//             <div
//               onClick={handleMiniVdClick}
//               className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
//             >
//               <video
//                 ref={nextVdRef}
//                 src={getVideoSrc((currentIndex % totalVideos) + 1)}
//                 loop
//                 muted
//                 id="current-video"
//                 className="size-64 origin-center scale-150 object-cover object-center"
//                 onLoadedData={handleVideoLoad}
//               />
//             </div>
//             {/* </VideoPreview> */}
//           </div>

//           <video
//             ref={nextVdRef}
//             src={getVideoSrc(currentIndex)}
//             loop
//             muted
//             id="next-video"
//             className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
//             onLoadedData={handleVideoLoad}
//           />
//           <video
//             src={getVideoSrc(
//               currentIndex === totalVideos - 1 ? 1 : currentIndex
//             )}
//             autoPlay
//             loop
//             muted
//             className="absolute left-0 top-0 size-full object-cover object-center"
//             onLoadedData={handleVideoLoad}
//           />
//         </div>

//         <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
//           G<b>A</b>MING
//         </h1>

//         <div className="absolute left-0 top-0 z-40 size-full">
//           <div className="mt-24 px-5 sm:px-10">
//             <h1 className="special-font hero-heading text-blue-100">
//               redefi<b>n</b>e
//             </h1>

//             <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
//               Enter the Metagame Layer <br /> Unleash the Play Economy
//             </p>

//             <Button
//               id="watch-trailer"
//               title="Watch trailer"
//               leftIcon={<TiLocationArrow />}
//               containerClass="bg-yellow-300 flex-center gap-1"
//             />
//           </div>
//         </div>
//       </div>

//       <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
//         G<b>A</b>MING
//       </h1>
//     </div>
//   )
// }

// export default Hero
