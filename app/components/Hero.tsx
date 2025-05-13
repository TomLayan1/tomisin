import React from 'react';
import { MdHorizontalRule } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from 'motion/react';

const Hero:React.FC = () => {
  // const textSliderVariant = {
  //   initial: {
  //     x: 0,
  //   },
  //   animate: {
  //     x: '-230%',
  //     transition: {
  //       repeat: Infinity,
  //       repeatType: 'mirror',
  //       duration: 50,
  //       delay: 0.5
  //     }
  //   }
  // }

  return (
    <section id='home' className='w-full h-screen md:h-auto bg-blac pt-28 lg:pt-40 pb-3.5 flex flex-col items-center justify-between relative overflow-hidden'>
      <div className='container mx-auto mb- md:mb-14'>
        <div>
          <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className='text-6xl md:text-8xl text-center font-bold mb-7'>Tomisin</motion.h1>
          <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.6 }}
           className='text-6xl md:text-8xl text-center font-bold mb-7'>Afolayan</motion.h1>
          <div className='text-[#896431] flex items-center justify-center gap-7'>
            <MdHorizontalRule size={25} />
            <a href='https://github.com/TomLayan1' target='_blank' rel='noopener noreferrer'><FaGithub size={25} /></a>
            <a href='https://www.linkedin.com/in/afolayan-oluwatomisin-428a86206/' target='_blank' rel='noopener noreferrer'><FaLinkedinIn size={25} /></a>
            <MdHorizontalRule size={25} />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <h1 className='text-[70px] text-[#f5e7d376] font-serif md:text-[80px] lg:text-[120px] whitespace-nowrap font-bold'>I build user interfaces for web applications.</h1>
      </div>
    </section>
  )
}

export default Hero