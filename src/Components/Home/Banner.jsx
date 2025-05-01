import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import img1 from '../../assets/1.svg'
import img2 from '../../assets/2.svg'
import men1 from '../../assets/men1.jpg'
import BannerImg from './BannerImg/BannerImg';

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
            <img className='' src={img1} alt="" />
        
        </SwiperSlide>
        <SwiperSlide>
            <img className='' src={img2} alt="" />
        
        </SwiperSlide>
        <SwiperSlide>
        <BannerImg title={'Refined Fashion for the Modern Man'} subtitle={'Sophisticated outfits for every occasion'}  buttonText={'Shop the Look'} buttonLink={'/store'} img={men1} />
        </SwiperSlide>
        <SwiperSlide>
        <img className='' src={img2} alt="" />
        </SwiperSlide>
      </Swiper>

            
        
            

        </div>
        
        
    );
};

export default Banner;