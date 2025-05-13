"use client"
import React, { useState } from 'react';
import { MdPlayArrow } from "react-icons/md";
import { experiences } from '../Data/data';

const Experience:React.FC = () => {
  const [experienceIndex, setExperienceIndex] = useState<number>(0);
  const myExperience = experiences[experienceIndex];

  return (
    <section className='w-full pt-16 overflow-x-hidden'>
      <div className='container w-[95%] lg:w-[80%] mx-auto'>
        <div className='w-full flex items-center gap-3 mb-10 lg:mb-10'>
          <h1 className='text-3xl md:text-5xl'>Where I've worked</h1>
          <hr className='min-w-[175px] md:w-[300px] border border-[#896431]' />
        </div>
        <div className='hidden md:flex'>
          <div className='w-[45%] lg:w-[40%]'>
            {experiences?.map((experience, i) => (
              <div key={experience.id} onClick={() => setExperienceIndex(i)} className={`w-full py-3 pl-5 cursor-pointer ${i === experienceIndex ? 'bg-[#292727] border-l-2 duration-200' : ''}`}>{experience.companyName}</div>          
            ))}
          </div>
          <div className='py-3 px-4'>
            <div className='mb-7'>
              <div className='flex gap-2 mb-2'>
                <p className='font-bold'>{myExperience.role}</p>
                <p className='font-bold text-[#896431]'>@ {myExperience.companyName}</p>
              </div>
              <p className='mb-2'>{myExperience.date}</p>
            </div>
            {myExperience.whatIDid?.map((item, i) => (
              <div key={i} className='flex items-cente gap-1.5 mb-2'>
                <MdPlayArrow size={20} className='text-[#896431]' />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='md:hidden'>
          {experiences?.map(experience => (
            <div key={experience.id} className='py-3 px-4 mb-3.5'>
              <div className='mb-4 md:mb-7'>
                <div className='md:flex gap-2 mb-2'>
                  <p className='text-[15px] font-bold mb-1.5 md:mb-0'>{experience.role}</p>
                  <p className='text-[15px] font-bold text-[#896431]'>@ {experience.companyName}</p>
                </div>
                <p className='text-[15px]'>{myExperience.date}</p>
              </div>
              {experience.whatIDid?.map(item => (
                <div className='flex items-cente gap-1.5 mb-2'>
                  <MdPlayArrow size={20} className='text-[#896431]' />
                  <p className='text-[15px]'>{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience