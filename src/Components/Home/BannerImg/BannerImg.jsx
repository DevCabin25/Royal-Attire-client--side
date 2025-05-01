import React from 'react';
import { Link } from 'react-router-dom';

const BannerImg = ({ title, subtitle, img, buttonText, buttonLink }) => {
    return (
        <div
            className="w-full h-[700px] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
                <p className="text-lg md:text-xl text-white opacity-80 mb-6">{subtitle}</p>
                <Link
                    to={buttonLink}
                    className="px-6 py-2 text-lg font-semibold text-white bg-black rounded-md shadow-lg hover:bg-gray-800 transition duration-300"
                >
                    {buttonText}
                </Link>
            </div>
        </div>
    );
};

export default BannerImg;
