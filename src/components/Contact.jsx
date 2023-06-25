import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px m-auto md:pl-20 p-4 py-16]'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#184c64]'>contact</h1>
        <form action="https://getform.io/f/7cf28ef6-1385-4d8d-bb93-a2fc3530a122" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 py-2'>
                <div className='felx flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 w-full' type="text" name='name'/>
                </div>
                <div className='felx flex-col'>
                    <label className='uppercase text-sm py-2'>Phone</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 w-full' type="text" name='phone' />
                </div>
            </div>
            <div className='felx flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-full' type="email" name='email' />
            </div>
            <div className='felx flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 w-full' type="text" name='subject' />
            </div>
            <div className='felx flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 flex border-gray-300 w-full' rows={10} name='message'></textarea>
            </div>
            <button className='bg-[#184c64] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact