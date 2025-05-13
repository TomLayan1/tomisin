import React, { useEffect, useState } from 'react'

const Footer:React.FC = () => {

  return (
    <section id='contact' className='w-full pt-14 lg:pb-7'>
      <div className='container w-[90%] lg:w-[80%] mx-auto'>
        <div className='flex flex-col-reverse md:flex-row md:justify-between mb-10 lg:mb-48'>
          <div className='w-[20%]'>
            <a href='mailto:dev.tomisin@gmail.com' target='_blank' rel='noopener noreferrer'><p className='mb-2.5'>Email</p></a>
            <a href='https://github.com/TomLayan1' target='_blank' rel='noopener noreferrer'><p className='mb-2.5'>GitHub</p></a>
            <a href='https://www.linkedin.com/in/afolayan-oluwatomisin-428a86206/' target='_blank' rel='noopener noreferrer'><p className='mb-2.5'>LinkedIn</p></a>
          </div>
          <div className='w-full md:w-[58%] mb-10 lg:mb-0 flex flex-col items-center md:block'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold justify-evenly mb-6 text-center md:text-left'>Have a question? Interested in my service? Hit me up.</h1>
            <a href='mailto:dev.tomisin@gmail.com' target='_blank' rel='noopener noreferrer'>
              <button className='w-[250px] lg:w-[300px] border py-2 hover:bg-[#f5e7d333] cursor-pointer duration-200'>Email me</button>
            </a>
          </div>
        </div>
        <div className='flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between'>
          <div className='mb-9'>
            <p className='text-[15px]'>Tomisin Afolayan</p>
            <p className='text-[15px]'>All Rights Reserved &copy; 2025</p>
          </div>
          <div>
            <div className='flex items-center gap-1.5'>
              <div className='w-[5px] h-[5px] bg-green-500 rounded-full shadow-2xl shadow-green-300 blink'></div>
              <p className='text-[15px] text-[#f5e7d388]'>Available for work</p>
            </div>
            <p className='text-[15px]'>Freelance, Fulltime</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer