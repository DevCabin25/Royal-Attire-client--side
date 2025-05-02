import React from "react";
import { Gem, ShieldCheck, Scissors, Sparkles } from "lucide-react";
import { Leaf, Recycle, CheckCircle } from "lucide-react";
import { Users } from "lucide-react";
const AboutUs = () => {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-12 max-w-7xl mx-auto space-y-12">
      {/* About Royal Attire */}
      <section className="bg-black text-white px-6 md:px-16 py-12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">
          Our Story
        </h2>
        <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
          <p>
            Royal Attire was founded with a simple belief: elegance should be
            effortless, timeless, and accessible for every gentleman.
          </p>
          <p>
            What began as a passion for refined menswear soon became a movement
            to redefine how men in Bangladesh — and beyond — dress with dignity,
            confidence, and style.
          </p>
          <p>
            Born out of frustration with limited local options for premium,
            well-fitted outfits, our founders combined their love for
            traditional craftsmanship with a modern design philosophy.
          </p>
          <p>
            The result? A brand where every stitch tells a story of bold
            ambition and quiet sophistication.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-black text-white px-6 md:px-16 py-12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">
          Our Mission
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          To empower men to express confidence and class through premium-quality
          attire and style guidance tailored for every occasion.
        </p>
      </section>

      {/* Our Vision */}
      <section className="bg-black text-white px-6 md:px-16 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-3">Our Vision</h2>
        <p className="text-lg text-gray-300">
          To become the leading destination for elegant menswear in South Asia,
          blending tradition, innovation, and sustainability into every outfit
          we create.
        </p>
      </section>
      {/* Sustainability & Materials */}
      <section className="bg-black text-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8">
            Sustainability & Materials
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Eco-Conscious Fabrics */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-left shadow-lg hover:scale-[1.02] transition">
              <Leaf className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Eco-Conscious Fabrics
              </h3>
              <p className="text-gray-300 text-sm">
                We choose eco-conscious fabrics wherever possible, ensuring
                minimal environmental impact.
              </p>
            </div>

            {/* Ethical Tailors */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-left shadow-lg hover:scale-[1.02] transition">
              <Recycle className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ethical Tailors</h3>
              <p className="text-gray-300 text-sm">
                Partnering with ethical tailors and small-batch producers who
                value quality and responsibility.
              </p>
            </div>

            {/* Reducing Waste */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-left shadow-lg hover:scale-[1.02] transition">
              <CheckCircle className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reducing Waste</h3>
              <p className="text-gray-300 text-sm">
                Reducing waste through smart design and limited-run collections
                to minimize excess production.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Core Values */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-12 tracking-tight">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Elegance */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left shadow-lg hover:scale-[1.02] transition">
              <Gem className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Elegance
              </h3>
              <p className="text-gray-300 text-sm">
                Designs that speak with grace and presence — every piece is
                timeless.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left shadow-lg hover:scale-[1.02] transition">
              <ShieldCheck className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Integrity
              </h3>
              <p className="text-gray-300 text-sm">
                Ethical sourcing, fair pricing, and branding with transparency.
              </p>
            </div>

            {/* Craftsmanship */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left shadow-lg hover:scale-[1.02] transition">
              <Scissors className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Craftsmanship
              </h3>
              <p className="text-gray-300 text-sm">
                Precision in every fabric, fit, and finish — built to impress
                and last.
              </p>
            </div>

            {/* Inspiration */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left shadow-lg hover:scale-[1.02] transition">
              <Sparkles className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Inspiration
              </h3>
              <p className="text-gray-300 text-sm">
                Empowering men to elevate their daily style through thoughtful
                fashion.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="bg-black text-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">Our Team</h2>

          <p className="text-lg text-gray-300 mb-4">
            We are a growing collective of designers, stylists, and storytellers
            — united by a love for men’s fashion, Bangladeshi heritage, and
            modern design excellence.
          </p>

          <p className="text-lg text-gray-300 mb-8">
            Every piece we craft is backed by people who care deeply about
            quality, beauty, and your best first impression.
          </p>

          <div className="flex justify-center items-center gap-6">
            {/* Icon */}
            <Users className="h-12 w-12 text-white" />
            <p className="text-lg text-gray-400 italic">
              "Together, we bring your vision to life through passion and
              expertise."
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-800 to-black text-white px-6 md:px-16 py-16 max-w-6xl mx-auto rounded-xl shadow-lg">
        <div className="text-center">
          {/* Section Title */}
          <h2 className="text-5xl font-bold mb-8 text-shadow-xl">
            Why Royal Attire?
          </h2>

          {/* Subtitle */}
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Because you don’t just wear clothes — you wear confidence,
            character, and legacy. At Royal Attire, we believe that style is an
            extension of who you are — not just something you wear.
          </p>
        </div>

        {/* Decorative Line */}
        <div className="mt-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-900 opacity-30 rounded-lg"></div>
          <div className="relative z-10">
            <div className="h-1 bg-white rounded-full max-w-md mx-auto"></div>
          </div>
        </div>

        {/* Text Accent */}
        <div className="mt-8 text-center text-white font-extrabold text-8xl opacity-5">
          <span className="transform rotate-12">STYLE</span>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
