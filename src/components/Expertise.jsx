import React, {useRef} from 'react'
import Expitems from './Expitems'
import reactsvg from "../assets/react.png"
import gsapsvg from "../assets/gsap.png"
import tailwindsvg from "../assets/tailwind.png"
import figmasvg from "../assets/figma.png"
import framersvg from "../assets/framer.png"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const data = [
  {
    name: "React",
    img: reactsvg
  },
  {
    name: "GSAP",
    img: gsapsvg
  },
  {
    name: "Tailwind",
    img: tailwindsvg
  },
  {
    name: "Figma",
    img: figmasvg
  },
  {
    name: "Framer",
    img: framersvg
  },
  ]

export const Expertise = () => {

  const expRef = useRef()

  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(expRef.current,{
      opacity:0,
      y:40,
      delay:0.6,
      duration:0.5,
      scrollTrigger: {
        trigger: expRef.current,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        markers: false
      }
    })
  })

  return (
    <div id='expertise' className='flex flex-col items-center justify-center bg-black z-[1] py-20'>
      <div className='mx-48'>
          <h1 ref={expRef} className='m:text-5xl text-4xl font-bold  text-center'>
            <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>My Expertise</span>
          </h1>
      </div>
      <div className='mt-20 w-full px-40 flex flex-wrap justify-center gap-6'>
        {data.map((item, i) => (
          <Expitems data={item} key={i} />
        ))}
      </div>
    </div> 
  )
}
