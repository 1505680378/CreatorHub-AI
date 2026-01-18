import React from 'react'
import { AiToolsData } from '../assets/assets' 
import { useNavigate } from 'react-router-dom'
import { useUser, useClerk } from '@clerk/clerk-react'

const AITool = () => {
  const navigate = useNavigate()
  const { isSignedIn } = useUser()
  const { openSignIn } = useClerk()

  return (
    <div className='px-4 sm:px-10 md:px-20 xl:px-32  mb-14 sm:my-14'>

      {/* Heading */}
      <div className='text-center'>
        <h2 className='text-slate-700 text-2xl sm:text-3xl md:text-[42px] font-semibold'>
          Powerful AI Tools
        </h2>
        <p className='text-gray-500 text-sm sm:text-base max-w-sm sm:max-w-lg mx-auto mt-2'>
          Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
        </p>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10 justify-items-center'>
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => isSignedIn ? navigate(tool.path) : openSignIn()}
            className='p-6 sm:p-8 max-w-sm w-full rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer'
          >
            <tool.Icon
              className='w-10 h-10 sm:w-12 sm:h-12 p-2.5 sm:p-3 text-white rounded-xl'
              style={{ background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})` }}
            />

            <h3 className='mt-5 sm:mt-6 mb-2 sm:mb-3 text-base sm:text-lg font-semibold'>
              {tool.title}
            </h3>

            <p className='text-gray-400 text-xs sm:text-sm leading-relaxed'>
              {tool.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AITool
