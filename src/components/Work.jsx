import React, { useRef } from 'react'
import WorkItems from './WorkItems'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const data = [
    {
        year: 2024,
        title: 'Nexus World',
        duration: '1 years',
        details: 'Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.'
    },
    {
        year: 2023,
        title: 'Freelancer',
        duration: '1 years',
        details: 'Richard McCli`ntock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of the lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.'
    }
]

const Work = () => {

const workRef = useRef()

  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(workRef.current,{
      opacity:0,
      y:40,
      delay:0.6,
      duration:0.5,
      scrollTrigger: {
        trigger: workRef.current,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        markers: false
      }
    })
  })

  return (
    <div id='work' className='bg-black w-full'>
        <div className='max-w-[900px] m-auto lg:pl-0 md:20 py-20 flex flex-col justify-center'>
        <h1 ref={workRef} className='m:text-5xl text-4xl font-bold text-center mb-20'>
            <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>My Experience</span>
        </h1>
        {data.map((item, idx) => (
            <WorkItems 
            key={idx} 
            year={item.year} 
            title={item.title} 
            details={item.details}
            duration={item.duration} 
            />
        ))}
    </div> 
    </div>
  )
}

export default Work