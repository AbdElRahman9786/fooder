'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Mealsall = ({meals}) => {
  const [isClicked,setIsClicked]=useState(false)
  function handelClick(){
    setIsClicked((prev)=>!prev)
  }
  return (
   
        <Swiper
    modules={[Autoplay]}
      autoplay={{
        delay:3000, 
        disableOnInteraction: true, 
      }}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
        breakpoints={{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }} 
    >
        {meals.map((meal) => (
         <SwiperSlide
  key={meal.slug}
  className="bg-white shadow-lg rounded-2xl overflow-hidden "
>
  
  <div className="relative w-full h-64 group">
    <Image
      src={`https://images-nextjs.s3.eu-north-1.amazonaws.com/${meal.image}`}
      alt={meal.title}
      fill
      className="object-cover"
    />
    <div className='absolute bg-white w-[50px] p-2  h-[50px] top-2.5 right-2 rounded-xl translate-x-[80px] group-hover:translate-x-[-10px] duration-150'>
<svg className={`${isClicked?'text-orange-500':''}`} fill='currentColor' onClick={handelClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
    </div>
  </div>

  {/* Content section */}
  <div className="p-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
      {meal.title}
    </h2>

    <p className="text-gray-600 mb-4 line-clamp-2">{meal.summary}</p>

    <details className="mb-4">
      <summary className="cursor-pointer font-medium text-orange-600">
        Cooking Instructions
      </summary>
      <pre className="mt-2 text-sm text-gray-700 whitespace-pre-wrap">
        {meal.instructions}
      </pre>
    </details>

    <div className="text-sm text-gray-500">
      Created by: <span className="text-gray-700">{meal.creator}</span>
    </div>

    <Link
      href={`/meals/${meal.slug}`}
      className="mt-2 inline-block text-orange-600 hover:underline"
    >
      Show Details
    </Link>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
  )
}
