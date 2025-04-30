import React from "react";

const About = () => {
  return (
    <div className="bg-[#f9f9f9] text-gray-800 font-[Inter,sans-serif]">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/path-to-hero-image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-4 drop-shadow-md">
            A Legacy of Style
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Where heritage meets the future of men’s fashion.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:shadow-lg transition">
            Learn More About Us
          </button>
        </div>
      </section>

      {/* About Description */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-[#1D3557] mb-8">
          Crafting Elegance, One Thread at a Time
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At <strong>Royal Attire</strong>, we believe that true elegance never fades. Each stitch,
          every fabric, and every silhouette is meticulously chosen to help you embody sophistication.
          Rooted in timeless heritage and elevated through modern craftsmanship, we create style that
          speaks across generations.
        </p>
        <h3 className="text-2xl font-semibold text-[#1D3557] mb-4">
          Our Philosophy
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Royal Attire is more than just clothing — it's a statement of character, culture,
          and confidence. Our collections marry traditional elegance with contemporary vision to bring
          you garments that are both bold and timeless.
        </p>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 text-center">
          {[
            {
              title: "Premium Fabrics",
              desc: "Hand-selected from top mills for softness, durability, and luxury.",
            },
            {
              title: "Timeless Designs",
              desc: "Inspired by tradition. Evolved for the modern man.",
            },
            {
              title: "Attention to Detail",
              desc: "From buttons to stitching — nothing is overlooked.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#F1FAEE] p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <h4 className="text-xl font-bold text-[#1D3557] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-[#1D3557] text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Dress Like Royalty?</h2>
        <button className="bg-white text-[#1D3557] px-8 py-4 font-semibold text-lg rounded-full hover:shadow-xl transition">
          Explore the Collection
        </button>
      </section>
    </div>
  );
};

export default About;
