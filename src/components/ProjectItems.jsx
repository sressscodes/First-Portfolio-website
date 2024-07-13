import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ProjectItems = ({ img, title }) => {

  const triggerTemplate = useRef()

  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(triggerTemplate.current,{
      opacity:0,
      x:-80,
      delay:0.8,
      duration:1,
      scrollTrigger: {
        trigger: triggerTemplate.current,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
        markers: false
      }
  })})

  return (
    <div ref={triggerTemplate} className='relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-zinc-500/20'>
      <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' style={{ width: '100%', height: '100%' }} />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] transform translate-x-[-50%] -translate-y-1/2'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React Js</p>
        <a href="/">
          <p className='w-[180px] text-center p-3 rounded-lg bg-gradient-to-r from-indigo-700/80 via-purple-700/80 to-pink-700/80 text-white font-bold curser-pointer text-lg'>More Info</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
