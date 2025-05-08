import React from 'react'
import { motion } from "motion/react";


const Intro:React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex items-center lg:items-baseline-last justify-center overflow-hidden">
      <div className="container mx-auto flex items-baseline-last justify-center gap-3 md:gap-5">
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-5xl md:text-8xl lg:text-[240px] font-bold">T</motion.p>
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-5xl md:text-8xl lg:text-[240px] font-bold">O</motion.p>
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="text-5xl md:text-8xl lg:text-[240px] font-bold">M</motion.p>
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-5xl md:text-8xl lg:text-[240px] font-bold">I</motion.p>
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.0 }}
          className="text-5xl md:text-8xl lg:text-[240px] font-bold">S</motion.p>
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="text-5xl md:text-8xl lg:text-[240px] font-bold">I</motion.p>
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.0 }}
          className="text-5xl md:text-8xl lg:text-[240px] font-bold">N</motion.p>
        <motion.div 
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: 1, delay: 4.5 }}
          className='w-[10px] h-[10px] md:w-[20px] md:h-[20px] lg:w-[50px] lg:h-[50px] bg-[#896431] rounded-full'></motion.div>
      </div>
    </div>
  )
}

export default Intro