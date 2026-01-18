import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'
import { assets } from '../assets/assets'

const Navbar = () => {

  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()


  return (
    <>
      <div className='fixed flex px-4 z-30 backdrop-blur-2xl w-full justify-between items-center py-2 sm:px-10 xl:px-32 sm:py-3'>

        {/* Logo */}
        <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate('/')}>
          <img src={assets.logo} alt="logo" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'/>
          <h3 className='text-lg sm:text-xl md:text-2xl'>CreatorHub AI</h3>
        </div>

        {/* User icon or Button */}

        {
          user ? <UserButton />
            :
            <button onClick={openSignIn} className='flex gap-1 sm:gap-2 rounded-full items-center bg-[#5044E5] text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-10 py-2 sm:py-2.5 md:py-2.5 text-white cursor-pointer transition-all duration-200'>Get Started <ArrowRight className='w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4' /></button>
        }

      </div>
    </>
  )
}

export default Navbar
