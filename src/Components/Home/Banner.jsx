import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import img1 from "../../assets/1.svg";
import img2 from "../../assets/2.svg";
import men1 from "../../assets/men1.jpg";
import BannerImg from "./BannerImg/BannerImg";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper h-[80vh] w-full"
      >
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            className="w-full h-full object-cover"
            src={img1}
            alt="Fashion Collection"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white space-y-4">
              <h1 className="text-5xl font-bold animate-fade-in">
                Royal Attire
              </h1>
              <p className="text-xl animate-slide-up">
                Where Elegance Meets Style
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            className="w-full h-full object-cover"
            src={img2}
            alt="Fashion Collection"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white space-y-4">
              <h1 className="text-5xl font-bold animate-fade-in">
                Premium Collection
              </h1>
              <p className="text-xl animate-slide-up">Discover Your Style</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <BannerImg
            title={"Refined Fashion for the Modern Man"}
            subtitle={"Sophisticated outfits for every occasion"}
            buttonText={"Shop the Look"}
            buttonLink={"/store"}
            img={men1}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
