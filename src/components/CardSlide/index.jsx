import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import CardA from '../../images/cards/A.jpg'
import CardV from '../../images/cards/V.jpg'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[600px]"
      >
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardV} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardV} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
        <SwiperSlide className=''><img src={CardA} className='w-[400px]' alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
