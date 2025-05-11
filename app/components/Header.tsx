"use client"

import React, { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const Header:React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  return (
    <>
      <header className='bg-[#1c1b1b] w-full fixed top-0 left-0 z-10 overflow-x-hidden'>
        <div className='container w-[95%] mx-auto py-4.5 px-2.5 flex items-center justify-between relative'>
          <div className='flex items-baseline gap-1 cursor-pointer'>
            <h1 className='text-2xl lg:text-3xl font-bold'>TOMISIN</h1>
            <div className='w-[8px] h-[8px] bg-[#896431] rounded-full'></div>
          </div>
          <nav className={`w-[70%] md:w-[50%] lg:w-auto h-screen lg:h-auto bg-[#896431] lg:bg-transparent fixed lg:static top-0 right-0 z-50 pt-6 lg:pt-0 px-5 lg:px-0 duration-300 ease-in-out lg:translate-x-0 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* <div className='lg:hidden flex items-baseline gap-1 mb-6 cursor-pointer'>
              <h1 className='text-2xl lg:text-3xl font-bold'>TOMISIN</h1>
              <div className='w-[8px] h-[8px] bg-[#896431] rounded-full'></div>
            </div> */}

            <div className='flex flex-col lg:flex-row gap-8 mb-8 lg:mb-0'>
              <p className='lg:hover:text-[#896431] duration-300 cursor-pointer'>Home</p>
              <p className='lg:hover:text-[#896431] duration-300 cursor-pointer'>Services</p>
              <p className='lg:hover:text-[#896431] duration-300 cursor-pointer'>Work</p>
              <p className='lg:hover:text-[#896431] duration-300 cursor-pointer'>Contact</p>
            </div>

            <button className='w-[100px] md:w-[120px] text-[15px] border border-[#f5e7d3] hover:bg-[#f5e7d333] p-2 cursor-pointer lg:hidden'>Resume</button>
          </nav>
          <div className='flex items-center gap-6'>
            <button className='w-[100px] md:w-[120px] text-[15px] p-2 border border-[#f5e7d3] hover:bg-[#f5e7d333] cursor-pointer hidden lg:block'>Resume</button>
            <div onClick={() => setShowMenu(!showMenu)} className='cursor-pointer z-50 lg:hidden'>
              {showMenu ? <LiaTimesSolid size={25} /> : <HiBars3BottomRight size={25} />}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header