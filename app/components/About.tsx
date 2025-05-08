import React from 'react'
import { motion } from 'motion/react'

const About:React.FC = () => {
  return (
    <section className=''>
      <div className='constainer w-[90%] mx-auto'>
        <div className='flex flex-col lg:flex-row items-cente gap-4 lg:gap-12'>
          <div className='overflow-hidden w-[250px] h-[250px] lg:w-[25%] lg:h-[450px] shadow-customShadow rounded-full lg:rounded-[30px]'>
            <img src='/me.jpg' alt='Tomisin' />
          </div>
          <div className='w-full lg:w-[70%] py-3 px-5'>
            <div>
              <div className='mb-11'>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className='text-3xl md:text-5xl mb-12'
                >About Me</motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className='text-lg text-justify font-serif text-white'
                >Hi, I’m Tomisin Afolayan. I'm a front-end developer proficient in building high-performance web applications using React.JS, Next.JS with Typescript. My projects have consistently resulted in improved performance and user satisfaction. Eager to contribute to innovative software solutions with a focus on high performance as a dedicated developer.</motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About