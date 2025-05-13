import React from 'react'
import { stacks } from '../Data/data'

const About:React.FC = () => {
  return (
    <section id='about' className='w-full pt-28'>
      <div className='constainer w-[93%] lg:w-[80%] mx-auto'>
        <div className='w-full flex items-center gap-3 mb-10 md:mb-20'>
          <h1 className='text-3xl md:text-5xl'>About Me</h1>
          <hr className='min-w-[148px] md:w-[300px] border border-[#896431]' />
        </div>
        <div className='lg:flex gap-16'>
          <div className='mb-12 lg:mb-0 lg:w-1/2'>
            <h1 className='text-3xl text-[#896431] font-bold mb-3'>Get to know me!</h1>
            <p className='leading-8'>
              I'm a front-end developer proficient in building high-performance web applications using React.JS with Typescript. My projects have consistently resulted in improved performance and user satisfaction. Eager to contribute to innovative software solutions with a focus on high performance as a dedicated developer.
            </p>
          </div>
          <div className='lg:w-1/2'>
            <h1 className='text-3xl text-[#896431] font-bold mb-3'>Stack</h1>
            <div className='flex gap-5 flex-wrap'>
              {stacks.map((stack, i) => (
                <p key={i} className='border-2 border-t-0 py-1 px-3 rounded-2xl'>{stack}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About