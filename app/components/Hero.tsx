import React from 'react';
import { motion } from 'motion/react';

const Hero:React.FC = () => {
  const textSliderVariant = {
    initial: {
      x: 0,
    },
    animate: {
      x: '-230%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 50,
        delay: 0.5
      }
    }
  }

  return (
    <section className='w-full bg-black pt-40 pb-3.5 relative overflow-hidden'>
      <div className='container mx-auto mb-14'>
        <div>
          <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className='text-8xl text-center font-bold mb-7'>Tomisin</motion.h1>
          <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.6 }}
           className='text-8xl text-center font-bold'>Afolayan</motion.h1>
        </div>
      </div>
      <div>
        <h1 className='text-[70px] text-white/35 font-serif md:text-[80px] lg:text-[120px] whitespace-nowrap font-bold'>I build user interfaces for web applications.</h1>
      </div>
    </section>
  )
}

export default Hero