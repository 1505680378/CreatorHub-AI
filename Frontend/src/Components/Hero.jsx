import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className='px-4 sm:px-10 md:px-20 xl:px-32 relative flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-[95vh]'>
      
      {/* Heading */}
      <div className='text-center mb-6 sm:mb-8 sm:mt-25'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-tight'>
          Create amazing content <br />
          with <span className='text-[#5044E5]'>AI Tools</span>
        </h1>

        <p className='mt-4 max-w-sm sm:max-w-lg md:max-w-xl 2xl:max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Transform your content creation with our suite of premium AI tools. Generate blog titles, generate images and enhance your workflow.
        </p>
      </div>

      {/* Buttons */}
      <div className='flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm'>
        <button
          onClick={() => navigate('/ai')}
          className='bg-[#5044E5] text-white px-6 sm:px-10 py-2.5 sm:py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'
        >
          Start creating now
        </button>

        <button
          className='bg-white px-6 sm:px-10 py-2.5 sm:py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'
        >
          Watch demo
        </button>
      </div>

      {/* Trust badge */}
      <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-4 mx-auto mt-6 sm:mt-8 text-xs sm:text-sm text-gray-600'>
        <img src="src/assets/user_group.png" alt="group" className='h-6 sm:h-8' />
        Trusted by 25k+ people
      </div>

    </div>
  )
}

export default Hero
