import React from 'react'
import Navbar from './components/navbar'

function About() {
  return (
    <div>
        <Navbar />
        <p className='text-pink-300 font-mono font-semibold text-[40px] my-2'> About Us </p>
      <p className='text-black font-mono text-[15px] mx-10'> Menopause is a topic that many of us often avoid discussing, whether due to discomfort, societal taboos, or simply the lack of open conversation around it. At FemUnity, we believe it’s time to break the silence. We’ve created a safe, supportive space where you can ask questions, share your thoughts, and connect with others who are navigating similar experiences.

Whether you prefer to communicate privately or engage in public discussions, our platform offers both. You’ll have the opportunity to meet others who are going through the same challenges, forming a network of support and understanding. Together, we can build a community where no one has to feel alone during this life-changing journey.

Our mission is to provide a platform where you can share, learn, and grow, all while maintaining your privacy and comfort. Join us in creating an empowered, informed, and connected community for those going through menopause. </p>
    </div>
  )
}

export default About