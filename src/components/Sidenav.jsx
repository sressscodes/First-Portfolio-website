import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineSetting} from 'react-icons/ai'
import {BsPerson, BsBagCheck} from 'react-icons/bs'

const Sidenav = () => {

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
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-grey-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <BsBagCheck size={20}/>
              <span className='pl-4'>Work</span>
            </a>
            <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-grey-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <AiOutlineProject size={20}/>
              <span className='pl-4'>Project</span>
            </a>
            <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg text-white bg-grey-100 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <BsPerson size={20}/>
              <span className='pl-4'>Resume</span>
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
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
            <a href="#main" className='rounded-full shadow-lg bg-cyan-900 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <AiOutlineHome size={20} className='text-white'/>
            </a>
            <a href="#work" className='rounded-full shadow-lg bg-cyan-900 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <BsBagCheck size={20} className='text-white'/>
            </a>
            <a href="#projects" className='rounded-full shadow-lg bg-cyan-900 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <AiOutlineProject size={20} className='text-white'/>
            </a>
            <a href="#main" className='rounded-full shadow-lg bg-cyan-900 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <BsPerson size={20} className='text-white'/>
            </a>
            <a href="#contact" className='rounded-full shadow-lg bg-cyan-900 shadow-slate-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100' >
              <AiOutlineMail size={20} className='text-white'/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav