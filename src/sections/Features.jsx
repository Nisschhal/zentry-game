import React from "react"
import BentoCard from "../components/BentoCard"
import { TiLocationArrow } from "react-icons/ti"
import BentoTilt from "../components/BentoTilt"
const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5   py-32">
          <div className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </div>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in the rich and ever-expanding world of Metagaming,
            where the games you play shape your life with unique experiences and
            opportunities.
          </p>
        </div>
      </div>
      <BentoTilt className="border-hsla relative mb-7 h0=-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src={`videos/feature-1.mp4`}
          title={
            <>
              radi<b>n</b>t
            </>
          }
          description="A cross-platform metagame app. turing your activites across Web2 and Web3 games into a rewarding adventure"
          isComingSoon
        />
      </BentoTilt>

      {/* Grid of md:2 columns and 3 rows */}
      <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
        {/* md:Col span1 and Row span 2 Anime Card */}
        <BentoTilt className="bento-tilt_1  border-hsla  md:row-span-2">
          <BentoCard
            src={`videos/feature-2.mp4`}
            title={
              <>
                zig<b>m</b>a
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion"
            // isComingSoon
          />
        </BentoTilt>
        {/* md:Col span1 and Row span 1 */}
        <BentoTilt className="bento-tilt_1 border-hsla row-span-1 ms-32 md:ms-0 ">
          <BentoCard
            src={`videos/feature-3.mp4`}
            title={
              <>
                zig<b>m</b>a
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion"
            // isComingSoon
          />
        </BentoTilt>
        {/* md:Col span1 and Row span 1 */}
        <BentoTilt className="bento-tilt_1 border-hsla me-14  md:me-0">
          <BentoCard
            src={`videos/feature-4.mp4`}
            title={
              <>
                zig<b>m</b>a
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion"
            // isComingSoon
          />
        </BentoTilt>

        {/* Flex Container */}
        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font text-black">
              M<b>o</b>
              re co
              <b>m</b>ing s<b>o</b>on!
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        {/* Last Bento CArd */}

        <BentoTilt className="bento-tilt_2">
          <video
            src={`videos/feature-5.mp4`}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </section>
  )
}

export default Features
