import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram , FaLinkedin} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main' className='relative'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="" />
        <div className='absolute w-full h-screen top-0 left-0 bg-black/20'></div>
        <div className='absolute top-0 left-0 max-w-[720px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-100'>I am Sresta</h1>
            <h2 className='flex sm:text-3xl text-2xl p-4 text-gray-200'>I'm a
            <TypeAnimation
                sequence={[
                'UI/UX Designer', // Types 'One'
                2000, // Waits 1s
                'Web Developer', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'coder',
                2000, // Waits 2s
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
            </h2>
            <div className='flex justify-between pt-5 max-w-[200px] w-full text-gray-100'>
                <FaTwitter className='cursor-pointer' size={20}/>
                <FaFacebookF className='cursor-pointer' size={20}/>
                <FaInstagram className='cursor-pointer' size={20}/>
                <FaLinkedin className='cursor-pointer' size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Main