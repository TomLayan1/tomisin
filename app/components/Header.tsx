"use client"

import React, { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const Header:React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  return (
    <>
      {showMenu && <div className='w-full h-screen bg-[#ddd8d863] fixed top-0 left-0 z-10'></div>}
      <header className='w-full fixed top-0 left-0 z-10 bg-black overflow-x-hidden'>
        <div className='container mx-auto py-4 px-2.5 flex items-center justify-between relative'>
          <div className='flex items-baseline gap-1'>
            <h1 className='text-2xl lg:text-3xl font-bold'>TOMISIN</h1>
            <div className='w-[8px] h-[8px] bg-gray-500 rounded-full'></div>
          </div>
          <nav className={`w-[70%] md:w-[50%] lg:w-auto h-screen lg:h-auto bg-white lg:bg-transparent text-black lg:text-white fixed lg:static top-0 right-0 z-30 pt-6 lg:pt-0 px-5 lg:px-0 duration-300 ease-in-out lg:translate-x-0 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='lg:hidden flex items-baseline gap-1 mb-6'>
              <h1 className='text-2xl lg:text-3xl font-bold'>TOMISIN</h1>
              <div className='w-[8px] h-[8px] bg-gray-500 rounded-full'></div>
            </div>
            <div className='flex flex-col lg:flex-row gap-8'>
              <p className='hover:text-gray-500 duration-300 cursor-pointer'>Home</p>
              <p className='hover:text-gray-500 duration-300 cursor-pointer'>Services</p>
              <p className='hover:text-gray-500 duration-300 cursor-pointer'>Work</p>
              <p className='hover:text-gray-500 duration-300 cursor-pointer'>Contact</p>
            </div>
          </nav>
          <div className='flex items-center gap-6'>
            <button className='w-[120px] text-[15px] bg-gradient-to-r from-gray-500 to-gray-300 p-2 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl cursor-pointer'>Resume</button>
            <div onClick={() => setShowMenu(!showMenu)} className='cursor-pointer z-50 lg:hidden'>
              {showMenu ? <LiaTimesSolid size={25} className='text-black' /> : <HiBars3BottomRight size={25} />}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header