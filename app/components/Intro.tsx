import React from 'react'
import { motion } from "motion/react";


const Intro:React.FC = () => {
  return (
    <div className="w-full h-[100vh] bg-black flex items-center lg:items-baseline-last justify-center overflow-hidden">
      <div className="container mx-auto flex items-center justify-center gap-4 md:gap-5">
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
      </div>
    </div>
  )
}

export default Intro