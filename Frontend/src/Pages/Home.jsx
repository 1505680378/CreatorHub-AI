import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AITool from '../Components/AITool'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AITool/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
