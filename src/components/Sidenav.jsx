import React, {useRef, useState} from 'react'
import {AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { IoHomeOutline } from "react-icons/io5";
import { SlBriefcase } from "react-icons/sl";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";

const Sidenav = () => {

  const navRef = useRef()

  useGSAP(()=>{
      gsap.from(navRef.current, {
        opacity: 0,
        x: -90,
        delay: 3.5,
        duration: 1,
        scale:1
      });
  })

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    console.log('state changed')
  }

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden text-white'/>
      {
        nav ? (
          <div className='bg-cyan-900 fixed w-full h-screen flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-grey-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <IoHomeOutline size={20}/>
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav} href="#experience" className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-grey-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <SlBriefcase size={20}/>
              <span className='pl-4'>Experience</span>
            </a>
            <a onClick={handleNav} href="#expertise" className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-grey-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <HiOutlineRocketLaunch size={20}/>
              <span className='pl-4'>Expertise</span>
            </a>
            <a onClick={handleNav} href="#project" className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-grey-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <IoDocumentTextOutline size={20}/>
              <span className='pl-4'>Project</span>
            </a>
            <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-grey-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <AiOutlineMail size={20}/>
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        )
        : (
          ''
        )
      }
      <div ref={navRef} className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
            <a href="#main" className='rounded-full shadow-lg bg-zinc-500/25 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
            <IoHomeOutline size={20} className='text-white'/>
            </a>
            <a href="#work" className='rounded-full shadow-lg bg-zinc-500/25 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <SlBriefcase size={18} className='text-white'/>
            </a>
            <a href="#expertise" className='rounded-full shadow-lg bg-zinc-500/25 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <HiOutlineRocketLaunch size={20} className='text-white'/>
            </a>
            <a href="#projects" className='rounded-full shadow-lg bg-zinc-500/25 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <IoDocumentTextOutline size={20} className='text-white'/>
            </a>
            <a href="#contact" className='rounded-full shadow-lg bg-zinc-500/25 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <AiOutlineMail size={20} className='text-white'/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav