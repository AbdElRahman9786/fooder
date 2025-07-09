'use client'
import Image from 'next/image'
import img from '../../app/images/Group 20.png'
import { motion } from 'framer-motion'


export const Section = () => {
   
  return (
    <div className='bg-[#F47200] flex justify-evenly items-center my-40 text-white font-bold flex-wrap p-10'>
         <div>
            <p className='text-lg'>Get Up To</p>
            <p className='text-3xl'>50% OFF</p>
            <p>On Your 2 Order’s</p>
            <button className='bg-white text-[#F47200] px-10 py-2  rounded-2xl mt-5'>Order Now</button>
        </div>
        <motion.div  
    className='w-[40%]' >
            <Image src={img} alt='food image'/>
        </motion.div>
       
    </div>
  )
}
