import React from "react";
import { Link } from "react-router-dom";

const BannerImg = ({ title, subtitle, img, buttonText, buttonLink }) => {
  return (
    <div className="relative w-full h-full">
      <img src={img} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
        <div className="max-w-2xl mx-auto px-6 text-white space-y-6 transform translate-y-0 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light">
            {subtitle}
          </p>
          <Link
            to={buttonLink}
            className="inline-block px-8 py-4 text-lg font-semibold text-black bg-white rounded-full 
                                 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 
                                 shadow-lg hover:shadow-xl"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerImg;
