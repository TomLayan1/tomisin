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
        <div className='grid md:grid-cols-2 gap-10'>
          {projects?.map((project, i) => (
            <div key={i} className='border bg-[#171717]'>
              <div className='w-full overflow-hidden'>
                <img className='w-full hover:scale-150 duration-500 ease-in-out' src={project.image} alt={project.name} />
              </div>
              <div className='py-5'>
                <div className='flex items-center justify-center gap-7 mb-4'>
                  {project.stack.map((stack, i) => (
                    <p key={i} className='text-[14px]'>{stack}</p>
                  ))}
                </div>
                <div className='flex items-center justify-center gap-8'>
                  <div className='flex items-center gap-1.5'>
                    <p className='text-[15px]'>Code</p>
                    <FaGithub size={15} />
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <p className='text-[15px]'>Live Demo</p>
                    <FaExternalLinkAlt size={15} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects