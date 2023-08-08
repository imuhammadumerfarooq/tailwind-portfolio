import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center bg-[#0a192f] text-gray-300 p-4'>
      <form method='POST' action="https://getform.io/f/66d193e4-0ccb-4458-9c16-4fc662450608" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-2 pt-20'>
          <p className='text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-2'>Submit the form below or shoot me email - umerfarooqlive@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] text-black p-2' type="name" name='name' placeholder='Name' />
        <input className='bg-[#ccd6f6] text-black p-2 my-4' type="email" name='email' placeholder='Email' />
        <textarea className='bg-[#ccd6f6] text-black p-2' type="message" name='message' placeholder='Message' rows={10} />
        <button className='flex items-center text-white border-2 px-4 py-2 mt-2 mb-6 mx-auto hover:bg-orange-600 hover:border-orange-600'>Let's Collaborate
        </button>
      </form>
    </div>
  )
}

export default Contact