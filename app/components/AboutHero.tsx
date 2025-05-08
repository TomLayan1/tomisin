import React from 'react'
import { motion } from 'motion/react'

const AboutHero = () => {
  return (
    <section className='h-screen md:h-auto md:py-52 flex items-center justify-center'>
      <div className='container w-[95%] md:w-[90%] lg:w-[90%] mx-auto px-1'>
        <motion.h1
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.4 }}
         className='text-2xl md:text-5xl lg:text-8xl text-left mb-3'>Transforming creative ideas</motion.h1>
        <motion.h1
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='text-2xl md:text-5xl lg:text-8xl text-right'>into exceptional creations</motion.h1>
      </div>
    </section>
  )
}

export default AboutHero