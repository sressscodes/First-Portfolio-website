import React, { useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram , FaLinkedin} from 'react-icons/fa'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Main = () => {

  const nameRef = useRef()
  const passionRef = useRef()
  const socialsRef = useRef()

  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(nameRef.current,{
      opacity:0,
      y:40,
      delay:0.6,
      duration:0.5,
    }),
    tl.from(passionRef.current,{
      opacity:0,
      y:40,
      duration:0.5,
      delay:0.5
    }),
    tl.from(socialsRef.current,{
      opacity:0,
      y:40,
      duration:0.5,
      delay:0.5
    })
  })

  return (
    <div id='main' className='relative'>
        <div className=' flex flex-row justify-center items-center w-full h-screen bg-black'>
          <div className='flex flex-col justify-center lg:items-center items-center'>
            <h1 ref={nameRef} className='sm:text-5xl text-4xl font-bold text-gray-100'>Hi there! I am 
            <span className='pl-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Sresta.</span>
            </h1>
            <h2 ref={passionRef} className='flex sm:text-3xl text-2xl p-4 text-gray-200'>I'm a
                <TypeAnimation
                  sequence={[
                  'UI/UX Designer', // Types 'One'
                  2000, // Waits 1s
                  'React Developer', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'Graphic Designer',
                  2000, // Waits 2s
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '1em', paddingLeft: '5px' }}
                />
              </h2>
              <div ref={socialsRef} className='flex justify-between pt-5 max-w-[200px] w-full text-gray-100'>
                  <FaTwitter className='cursor-pointer' size={20}/>
                  <FaFacebookF className='cursor-pointer' size={20}/>
                  <FaInstagram className='cursor-pointer' size={20}/>
                  <FaLinkedin className='cursor-pointer' size={20}/>
              </div>
          </div>
          <img src=''/>
        </div>
    </div>
  )
}

export default Main