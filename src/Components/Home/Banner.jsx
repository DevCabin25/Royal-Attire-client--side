import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import img1 from '../../assets/1.svg'
import img2 from '../../assets/2.svg'

const Banner = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        effect={'fade'}
       
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
            <img src={img1} alt="" />
        
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
        
        </SwiperSlide>
        <SwiperSlide>
        <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;