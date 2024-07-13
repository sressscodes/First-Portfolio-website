import React, { useRef } from 'react'
import ProjectItems from './ProjectItems'
import artImg from '../assets/art.png'
import creditImg from '../assets/credit.png'
import paymentImg from '../assets/payment.png'
import zaffreanImg from '../assets/zaffrean.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Projects = () => {

  const projectRef = useRef()

  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(projectRef.current,{
      opacity:0,
      y:40,
      delay:0.6,
      duration:0.5,
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        markers: false
      }
    })
  })

  return (
    <div id='projects' className='flex flex-col items-center justify-center bg-black z-[1] pb-20'>
      <div className='mx-48'>
        <div className=''>
        <h1 ref={projectRef} className='m:text-5xl text-4xl font-bold  text-center'>
          <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>My Projects</span>
        </h1>
      </div>
        
        <div className='grid sm:grid-cols-2 gap-16 mt-32'>
          <ProjectItems img= {artImg} title="Art App"  />
          <ProjectItems img= {creditImg} title="Credit App" />
          <ProjectItems img= {paymentImg} title="PaymentApp" /> 
          <ProjectItems img= {zaffreanImg} title="Zaffrean App" />
        </div>
      </div>
    </div> 
  )
}

export default Projects  