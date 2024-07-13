import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Expitems = ({data}) => {

  const triggerBox = useRef()

  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(triggerBox.current,{
      opacity:0,
      y:40,
      scale:0.5,
      delay:0.8,
      duration:1,
      scrollTrigger: {
        trigger: triggerBox.current,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
        markers: false
      }
  })})

  return (
      <div ref={triggerBox} className='w-36 h-36 rounded-xl  bg-zinc-500/20 flex flex-col items-center justify-center gap-3'>
        <img src={data.img} alt={data.name} className='w-[30%] h-[30%] object-contain hover:rotate-90 ease-in duration-100'/>
        <p className='text-zinc-300 text-[15px]'>{data.name} {console.log(data.name)}</p>
      </div>
  )
}

export default Expitems