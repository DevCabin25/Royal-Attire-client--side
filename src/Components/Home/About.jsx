import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-6">
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          {/* Left Side - Text */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6">
              A Legacy of Style
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Royal Attire, we believe true elegance never fades. Every stitch, every fabric, every design is curated to help you express your finest self. Inspired by timeless traditions and driven by modern craftsmanship — Royal Attire is where heritage meets the future of men's fashion.
            </p>
            <a
              href="#learn-more"
              className="inline-block text-xl font-semibold text-white bg-black px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-80 h-96">
              <img
                src="https://via.placeholder.com/400x500"
                alt="Royal Attire"
                className="object-cover w-full h-full rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  




  );
};

export default About;
