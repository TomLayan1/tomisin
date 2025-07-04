"use client"

import React from 'react'
import { projects } from '../Data/data'
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'motion/react';
import { ProjectType } from '@/types/interface';


const Projects:React.FC = () => {

  const myProject: ProjectType[] = projects;
  
  return (
    <section id='work' className='w-full pt-28 overflow-x-hidden'>
      <div className='container w-[93%] lg:w-[80%] mx-auto'>
        <div className='w-full flex items-center gap-3 mb-10 lg:mb-20'>
          <h1 className='text-3xl md:text-5xl'>Projects</h1>
          <hr className='min-w-[175px] md:w-[300px] border border-[#896431]' />
        </div>
        <div className=''>
          {myProject?.map(project => (
            <div key={project.id} className={`lg:flex ${project.id % 2 === 0 ? 'flex-row-reverse' :'flex-row'} gap-4 mb-10 lg:mb-28`}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 * project.id }}
                viewport={{ once: true }}
                className='lg:w-[32%] mb-3.5 lg:mb-0'
              >
                <div>
                  <p className={`text-2xl md:text-3xl text-[#896431] font-bold ${project.id % 2 === 0 ? 'text-right' : 'text-left'} mb-4`}>{project.name}</p>
                  <div className='w-full lg:h-[180px] relative mb-2'>
                    <div className={`bg-[#292727] p-6 lg:absolute z-10 ${project.id % 2 === 0 ? '-left-16' : '-right-16'} rounded-2xl`}>
                      <p className='text-[14px]'>{project.description}</p>
                    </div>
                  </div>
                  <div className={`flex flex-wrap gap-3 ${project.id % 2 === 0 ? 'justify-end' : 'justify-start'} mb-2.5`}>
                    {project.stack.map((stack, i) => (
                      <p key={i} className='text-[13.5px] bg-[#f5e7d333] py-1 px-3.5 rounded-full'>{stack}</p>
                    ))}
                  </div>
                  <div className={`flex items-center ${project.id % 2 === 0 ? 'justify-end' : 'justify-start'} gap-8`}>
                    
                    <a href={project.links.github}>
                      <div className='flex items-center gap-1.5 cursor-pointer'>
                        <p className='text-[14px]'>Code</p>
                        <FaGithub size={15} />
                      </div>
                    </a>
                    <a href={project.links?.website}>
                      <div className='flex items-center gap-1.5 cursor-pointer'>
                        <p className='text-[14px]'>Live Demo</p>
                        <FaExternalLinkAlt size={15} />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.img 
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 * project.id }}
                viewport={{ once: true }}
                className='lg:w-[65%]' src={project.image} alt={project.name} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects