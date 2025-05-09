"use client"

import React from 'react'
import { projects } from '../Data/data'
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects:React.FC = () => {
  
  return (
    <section className='w-full py-14'>
      <div className='constainer w-[80%] mx-auto'>
        <h1 className='text-3xl md:text-5xl text-center mb-20'>Projects</h1>
        <div className=''>
          {projects?.map(project => (
            <div key={project.id} className={`flex ${project.id % 2 === 0 ? 'flex-row-reverse' :'flex-row'} gap-4 mb-28`}>
              <div className='w-[32%]'>
                <div>
                  <p className={`text-3xl text-[#896431] font-bold ${project.id % 2 === 0 ? 'text-right' : 'text-left'} mb-4`}>{project.name}</p>
                  <div className='w-full lg:h-[180px] relative mb-4'>
                    <div className={`bg-[#292727] p-6 absolute ${project.id % 2 === 0 ? '-left-16' : '-right-16'} rounded-2xl`}>
                      <p className='text-[14px]'>{project.description}</p>
                    </div>
                  </div>
                  <div className={`flex gap-4 ${project.id % 2 === 0 ? 'justify-end' : 'justify-start'} mb-2.5`}>
                    {project.stack.map((stack, i) => (
                      <p key={i} className='text-[14px]'>{stack}</p>
                    ))}
                  </div>
                  <div className={`flex items-center ${project.id % 2 === 0 ? 'justify-end' : 'justify-start'} gap-8`}>
                    <div className='flex items-center gap-1.5 cursor-pointer'>
                      <p className='text-[14px]'>Code</p>
                      <FaGithub size={15} />
                    </div>
                    <div className='flex items-center gap-1.5 cursor-pointer'>
                      <p className='text-[14px]'>Live Demo</p>
                      <FaExternalLinkAlt size={15} />
                    </div>
                  </div>
                </div>
              </div>
              <img className='w-[65%]' src={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects