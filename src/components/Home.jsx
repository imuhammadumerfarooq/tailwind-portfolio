import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      <div className='flex flex-col justify-center h-full max-w-[1000px] mx-auto px-8'>
        <p className='text-orange-600 pb-1'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Muhammad Umer Farooq</h1>
        <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>I'm a Frontend Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I’m a frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.</p>
        <div>
          <button className='group flex items-center text-white border-2 px-4 py-2 my-2 hover:bg-orange-600 hover:border-orange-600'>View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home