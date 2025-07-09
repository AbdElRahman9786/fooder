'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export const Header = () => {
  const [isOpen,setIsOpen]=useState(false)
  function handelOpen(){
    setIsOpen((prev)=>!prev)
  }
  return (
  

<nav className="bg-[#ffc08b] z-10 w-[80%] mx-auto sticky top-3 border-gray-200 shadow-2xl rounded-2xl">
   
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 container">
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Food<span className='text-[#FF7A04]'>Er</span></span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" onClick={handelOpen}>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className={`flex  max-md:hidden`}>
        
       <li>
          <Link href="/meals/share" className="block  px-3   hover:text-[#FF7A04] duration-150 ">share Meals</Link>
        </li>
        <li>
          <Link href="/community" className="block  px-3   hover:text-[#FF7A04] duration-150 ">Community</Link>
        </li>
     
      </ul>
    </div>
  </div>
  <div  className={`transition-all duration-500 ease-in-out overflow-hidden max-md:block
    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
  `}>
    <ul className="flex  flex-col items-center justify-center space-y-4 ">
        
       <li>
          <Link href="/meals/share" className="block   px-3    hover:text-[#FF7A04] duration-150 ">share Meals</Link>
        </li>
        <li>
          <Link href="/community" className="block  px-3   hover:text-[#FF7A04] duration-150 ">Community</Link>
        </li>
     
      </ul>
  </div>
 
</nav>

  )
}
