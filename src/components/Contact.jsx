import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Contact = () => {

    const titleRef = useRef()
    const triggerForm = useRef()

  useGSAP(()=>{
    var tl = gsap.timeline()
    var tf = gsap.timeline()
    tl.from(titleRef.current,{
      opacity:0,
      y:40,
      delay:0.6,
      duration:0.5,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        markers: false
      },
    })
    tl.from(triggerForm.current,{
        opacity:0,
        y:40,
        delay:0.6,
        duration:0.5,
        scrollTrigger: {
          trigger: triggerForm.current,
          start: "top 60%",
          end: "top 30%",
          scrub: true,
          markers: false
        },
      })
  })

  return (
    <div id='contact' className='flex flex-col items-center justify-center bg-black z-[1] py-32 text-white'>
        <h1 ref={titleRef} className='m:text-5xl text-4xl font-bold text-center'>
            <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Contact me</span>
        </h1>
        <form ref={triggerForm} action="https://getform.io/f/7cf28ef6-1385-4d8d-bb93-a2fc3530a122" method='POST' encType='multipart/form-data' className='mt-16 bg-zinc-500/20 px-10 py-10 rounded-xl'>
            <div className='grid md:grid-cols-2 gap-4 py-2'>
                <div className='felx flex-col'>
                    <label className='text-lg py-2 text-zinc-300'>Name</label>
                    <input className='rounded-lg px-2 h-11 flex bg-zinc-800/60 mt-2' type="text" name='name'/>
                </div>
                <div className='felx flex-col'>
                    <label className='text-lg py-2 text-zinc-300'>Phone</label>
                    <input className='rounded-lg px-2 h-11 flex bg-zinc-800/60 mt-2' type="text" name='phone' />
                </div>
            </div>
            <div className='felx flex-col mt-4'>
                <label className='text-lg py-2 text-zinc-300'>Email</label>
                <input className='rounded-lg h-12 px-2 flex bg-zinc-800/60 mt-2 w-full' type="email" name='email' />
            </div>
            <div className='felx flex-col mt-6'>
                <label className='text-lg py-2 text-zinc-300'>Message</label>
                <textarea className='rounded-lg h-28 px-2 flex bg-zinc-800/60 mt-2 w-full' rows={10} name='message'></textarea>
            </div>
            <button className='bg-gradient-to-r from-indigo-700/80 via-purple-700/80 to-pink-700/80 mt-10 w-full py-3 rounded-lg font-medium text-xl hover:scale-105 ease-in duration-100'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact