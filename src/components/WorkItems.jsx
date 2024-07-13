import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const WorkItems = ({year, title, duration, details}) => {
  const triggerLi = useRef()

  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(triggerLi.current,{
      opacity:0,
      y:80,
      delay:0.6,
      duration:0.5,
      scrollTrigger: {
        trigger: triggerLi.current,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        markers: false
      }
  })})

  return (
    <ol className='flex flex-col md:flex-row relative' >
      <li ref={triggerLi} className='mb-10 ml-10' >
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-gradient-to-r from-indigo-700/80 via-purple-700/80 to-pink-700/80 rounded-md'>{year}</span>
          <span className='text-lg font-semibold text-white'>{title}</span>
          <span className='my-1 text-sm font-normal leading-none text-zinc-400' >{duration}</span>
        </p>
        <p className='my-2 text-base font-normal text-zinc-400'>{details}</p>
      </li>
    </ol>
  )
}

export default WorkItems