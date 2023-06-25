import React from 'react'
import ProjectItems from './ProjectItems'
import artImg from '../assets/art.png'
import creditImg from '../assets/credit.png'
import paymentImg from '../assets/payment.png'
import zaffreanImg from '../assets/zaffrean.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 y-16'>
        <h1 className='text-4xl font-bold text-center text-[#184c64]'>Projects</h1>
        <p className='text-center py-8' >
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectItems img= {artImg} title="Art App"  />
          <ProjectItems img= {creditImg} title="Credit App" />
          <ProjectItems img= {paymentImg} title="PaymentApp" /> 
          <ProjectItems img= {zaffreanImg} title="Zaffrean App" />
        </div>
    </div> 
  )
}

export default Projects  