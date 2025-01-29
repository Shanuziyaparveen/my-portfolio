import React, { useState } from 'react'
import {X , Menu } from "lucide-react"


const Navbar = () => {
  const [mobileMenuOpen , setMobileMenuOpen] = useState(false)
  return (
    <div>
      <div className='flex justify-end mr-4 mt-2 px-2'>
        <button className='rounded-md md:hidden' onClick={()=> setMobileMenuOpen(!mobileMenuOpen)}>
          <span className='sr-only'>Open our menu</span>
          {mobileMenuOpen ? (
            <X  className="h-6 w-6" aria-hidden="true"/>
          ):(
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      <nav className='flex justify-between md:items-center text-black/75 px-10 pt-2 pb-2 md:px-20'>
        <span className='text-xl font-serif tracking-wide'>Portfolio</span>
        <ul className={` ${
        mobileMenuOpen ? "block" : "hidden"
      } justify-center items-center mx-auto md:mx-0 font-semibold md:mt-4 bg-[#05a3ae] rounded-xl md:border-none
        text-center md:bg-transparent md:flex gap-6 pb-2 `}>
          <a href="#About">
            <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
          </a>
          <a href="#Experience">
            <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li>
          </a>
          <a href="#Projects">
            <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li>
          </a>
          <a href="#Contact">
            <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
    )
}

export default Navbar