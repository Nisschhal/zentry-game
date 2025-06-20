import { useRef, useState } from "react"
import Button from "../components/Button.jsx"
import { TiLocationArrow } from "react-icons/ti"
const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1)
  const [loadedVideos, setLoadedVideos] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [isHovered, setHover] = useState(false)

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
    setCurrentVideoIndex(nextVideoIndex)
  }
  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`

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
                src={getVideoSrc(
                  currentVideoIndex + 1 === totalVideos + 1
                    ? 1
                    : currentVideoIndex + 1
                )}
                // autoPlay={true}
                muted
                loop
                className="size-64 object-cover scale-150 object-center"
              />
            </div>
          </div>
          {/* Background Video */}
          <video
            id="next-video"
            ref={nextVideoRef}
            src={getVideoSrc(currentVideoIndex)}
            muted
            loop
            className="absolute-center invisible size-64 z-20 origin-center object-cover"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(currentVideoIndex)}
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
