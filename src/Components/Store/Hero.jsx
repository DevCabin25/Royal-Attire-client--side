import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] bg-black text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=2187&auto=format&fit=crop')",
          opacity: 0.7,
        }}
      ></div>

      {/* Content Container */}
      <div className="relative h-full container-custom flex flex-col justify-center">
        <div className="max-w-3xl fade-in">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold mb-4">
            Redefining Modern Elegance
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-100 max-w-lg">
            Sophisticated attire for the contemporary gentleman who demands excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#shop" className="btn-primary">
              Explore Collection
            </a>
            <a
              href="#about"
              className="border border-white text-white px-6 py-3 inline-block text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors duration-200"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
