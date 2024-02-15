import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Anna  from '../../images/faces/annaSergiyevna.jpg'
import Zohid  from '../../images/faces/gulmiraYoqubova.jpg'
import Qurbon  from '../../images/faces/umarali.jpg'
import Nurbek  from '../../images/faces/quvonchTohirov.jpg'
import Bekzod  from '../../images/faces/zokirBoboyev.jpg'


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function SlideFace() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Anna} alt="" className=' h-full lg:h-[500px] block'/>
        <p className='text-6xl text-center mt-3'>Komiljon Yo'ldoshov</p>
        <br/>
        </SwiperSlide>
        <SwiperSlide><img src={Zohid} alt="" className='h-full lg:h-[500px] block'/>
        <p className='text-6xl text-center mt-3'>Zohid Bobojonov</p>
        <br />
        </SwiperSlide>
        <SwiperSlide><img src={Qurbon} alt="" className='h-full lg:h-[500px] block'/>
        <p className='text-6xl text-center mt-3'>Qurbonali G'ulomov</p>
        <br/>
        </SwiperSlide>
        <SwiperSlide><img src={Nurbek} alt="" className='h-full lg:h-[500px] block'/>
        <p className='text-6xl text-center mt-3'>Nurbek Qo'chqorov</p>
        <br/>
        </SwiperSlide>
        <SwiperSlide><img src={Bekzod} alt="" className='h-full lg:h-[500px] block'/>
        <p className='text-6xl text-center mt-3'>Bekzod Nuraliyev</p>
        <br/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}