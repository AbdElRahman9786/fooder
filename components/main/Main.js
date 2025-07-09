'use client'
import React from 'react'
import Link from "next/link";
import { motion } from 'framer-motion'

export const Main = () => {
  return (
   <>
       <div className="w-[90%] max-w-[100%] mx-auto flex justify-between items-center container max-md:justify-center max-md:text-center flex-wrap  max-xl:justify-center max-xl:text-center  ">
       
       <motion.div initial={{ opacity: 0, y: -30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.3 }}className=" w-[50%] ">
     <img 
       src="/images/Rose%20Gold%20Feminine%20Calligraphy%20Monogram%20Logo%2873%29%201@2x.png"
       alt="this hero"
       className=''
       
     />
   
   </motion.div>
        <motion.div   initial={{ opacity: 0, y: -30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.3 }} className="p-5 max-md:p-0 max-md:text-xl text-3xl font-bold text-white">
   <h1 className="p-3"> Welcome to Our Restaurant</h1>
   <p className="p-3">Where Every Bite Makes a Difference!</p>
   <div className='max-md:flex space-x-1.5  flex-wrap  justify-evenly '>
   <Link className="my-5 block border-2 p-3 rounded-2xl hover:bg-[#FF7A04] duration-150 hover:scale-105" href="/meals/share">share your Meals</Link>
   <Link className="my-5 block border-2 p-3 rounded-2xl hover:bg-[#FF7A04] duration-150 hover:scale-105" href="/community">Join To Community</Link>
   </div>
        </motion.div>
    
   
       </div></>
  )
}
