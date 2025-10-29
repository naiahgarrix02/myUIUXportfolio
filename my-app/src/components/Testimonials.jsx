import React from 'react'
import Marquee from 'react-fast-marquee'
import Card from './Card'
import { testimonials } from '../../constants/index.js'

const Testimonials = () => {
  return (
    <div className="px-[0px] mt-[60px]">
      <h1 className="text-[36px] font-regular greyish text-right mb-[40px] mr-[60px] ml-[60px]">
        testimonials.
      </h1>

      {/* ---- Top Row (Left → Right) ---- */}
      <Marquee
        pauseOnHover={true}
        gradient={false}
        speed={40}
        direction="left"
        className="mb-[30px]"
      >
        <div className="flex flex-row items-center">
          {testimonials.map((t, index) => (
            <div key={index} className="mx-[15px] flex-shrink-0">
              <Card text={t.text} name={t.name} position={t.position} />
            </div>
          ))}
        </div>
      </Marquee>

      {/* ---- Bottom Row (Right → Left) ---- */}
      <Marquee
        pauseOnHover={true}
        gradient={false}
        speed={40}
        direction="right"
      >
        <div className="flex flex-row items-center">
          {testimonials.map((t, index) => (
            <div key={index} className="mx-[15px] flex-shrink-0">
              <Card text={t.text} name={t.name} position={t.position} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default Testimonials
