"use client"

import React, { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

type NavLinkType = {
  id: string;
  name: string;
}

const Header:React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  const navLinks: NavLinkType[] = [
    {
      id: "#home",
      name: "Home",
    },
    {
      id: "#about",
      name: "About",
    },
    {
      id: "#work",
      name: "Work",
    },
    {
      id: "#contact",
      name: "contact",
    },
  ]
  
  return (
    <>
      <header className='bg-[#1c1b1b] w-full fixed top-0 left-0 z-20 shadow overflow-x-hidden'>
        <div className='container w-[95%] mx-auto py-4.5 px-2.5 flex items-center justify-between relative'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <div className='w-[50] h-[50px] overflow-hidden rounded-full'>
              <img className='w-[50px]' src='/me.jpg' alt='Tomisin' />
            </div>
            <div className='flex items-baseline gap-1'> 
              <h1 className='text-2xl lg:text-3xl font-bold'>TOMISIN</h1>
              <div className='w-[8px] h-[8px] bg-[#896431] rounded-full'></div>
            </div>
          </div>
          <nav className={`w-[70%] md:w-[50%] lg:w-auto h-screen lg:h-auto bg-[#896431] lg:bg-transparent fixed lg:static top-0 right-0 z-50 pt-14 lg:pt-0 px-5 lg:px-0 duration-300 ease-in-out lg:translate-x-0 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex flex-col lg:flex-row gap-8 mb-8 lg:mb-0'>
              {navLinks?.map(link => (
                <a onClick={() => setShowMenu(false)} key={link.id} href={link.id} rel="noopener noreferrer" className='lg:hover:text-[#896431] duration-300 cursor-pointer'>{link.name}</a>
              ))}
            </div>
            <a 
              href='/Tomisin.pdf'
              download='Tomisin Resume'
            >
              <button className='w-[100px] md:w-[120px] text-[15px] border border-[#f5e7d3] hover:bg-[#f5e7d333] duration-200 p-2 cursor-pointer lg:hidden'>Resume</button>
            </a>
          </nav>
          <div className='flex items-center gap-6'>
            <a
              href='/Tomisin.pdf'
              download='Tomisin Resume'
            >
              <button className='w-[100px] md:w-[120px] text-[15px] p-2 border border-[#f5e7d3] hover:bg-[#f5e7d333] duration-200 cursor-pointer hidden lg:block'>Resume</button>
            </a>
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