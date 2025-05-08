"use client"

import React, { useState } from 'react'
import { LuNotebookPen } from "react-icons/lu";
import { LuSettings2 } from "react-icons/lu";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import { motion } from 'motion/react'; 

const Processes:React.FC = () => {
  const [flipped, setFlipped] = useState<boolean>(false)

  const workProcess = [
    {
      step: 1,
      icon: <LuNotebookPen size={40} className='text-[#896431]' />,
      title: "Plan & Research",
      description: "Understand project goals, target users, and design requirements. Analyze references or wireframes and define the project scope."
    },
    {
      step: 2,
      icon: <LuSettings2 size={40} className='text-[#896431]' />,
      title: "Design Implementation",
      description: "Convert UI/UX designs into responsive, accessible, and pixel-perfect layouts using semantic HTML, CSS, and Tailwind."
    },
    {
      step: 3,
      icon: <MdOutlineDeveloperMode size={40} className='text-[#896431]' />,
      title: "Functional Development",
      description: "Add interactivity with JavaScript/TypeScript, manage state, fetch APIs, and ensure smooth performance across devices."
    },
    {
      step: 4,
      icon: <GrOptimize size={40} className='text-[#896431]' />,
      title: "Testing & Optimization",
      description: "Test across browsers and screen sizes, fix bugs, and optimize for speed, SEO, and accessibility before deployment."
    }
  ]

  return (
    <section className='w-full py-8'>
      <h1 className='text-3xl md:text-5xl text-center mb-20'>Working Process</h1>
      <div className='container w-[90%] mx-auto grid md:grid-cols-4 gap-11 perspective'>
        {workProcess?.map((item, i) => (
          <motion.div
            initial={{ rotateX: 180, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 * item.step }}
            // viewport={{ once: true }}
            key={i}
            className='bg-gradient-to-br from-[#896431] via-[#f5e7d3] to-[#896431] p-1'
          >
            <div className='h-full bg-[#1c1b1b] p-5 flex flex-col gap-3.5'>
              {item.icon}
              <h4>Step: {item.step}</h4>
              <p className='text-xl font-bold'>{item.title}</p>
              <p className='text-[15px]'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Processes