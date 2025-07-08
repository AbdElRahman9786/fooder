'use client'
import React from 'react'
import Image from "next/image";
import img from '../../app/images/Jakob-Esko-scaled-1.jpg'
import { motion } from 'framer-motion'
const cardData=[
    {name:"Chef Amina",iamge:img,descripton:"Master of Mediterranean flavors. Her recipes blend tradition with creativity."},
    {name:"Chef Amina",iamge:img,descripton:"Master of Mediterranean flavors. Her recipes blend tradition with creativity."},
    {name:"Chef Amina",iamge:img,descripton:"Master of Mediterranean flavors. Her recipes blend tradition with creativity."}
]

export const Card = () => {
  return (
    <>
     <motion.section  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} className=" px-4 py-10 w-[90%] text-white    mx-auto">
  <h2 className="text-3xl font-bold text-center  mb-8">
    Meet Our Passionate Chefs 
  </h2>

  <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
    
   
    {cardData.map((chef)=>{
        return(
 <div className="bg-[#FF8616] p-6 rounded-2xl shadow hover:shadow-xl transition">
      <Image
        src={chef.iamge}
        alt={chef.name}
        className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-center">{chef.name}</h3>
      <p className="text-sm text-center text-gray-600 mt-2">
        {chef.descripton}
      </p>
    </div> 
        )
    })}

    


   
   
  </div>
</motion.section>
    </>
  )
}
