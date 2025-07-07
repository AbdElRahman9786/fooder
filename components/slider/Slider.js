'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img from '../../app/images/Hyderabadi-Biryani-1024x538.jpg'
import Image from 'next/image';

const Slider = () => {
  return (
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image src={img} alt="its a hero image" className="rounded-2xl"/></SwiperSlide>
       <SwiperSlide><Image src={img} alt="its a hero image" className="rounded-2xl"/></SwiperSlide>
       <SwiperSlide><Image src={img} alt="its a hero image" className="rounded-2xl"/></SwiperSlide>
       <SwiperSlide><Image src={img} alt="its a hero image" className="rounded-2xl"/></SwiperSlide>
      
    </Swiper>
  )
}

export default Slider