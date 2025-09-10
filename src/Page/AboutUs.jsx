import React from "react";
import {
  Gem,
  ShieldCheck,
  Scissors,
  Sparkles,
  Leaf,
  Recycle,
  CheckCircle,
  Users,
} from "lucide-react";


const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-black  md:px-16 py-6  mx-auto space-y-12">
      {/* Our Story */}
      <section className="px-6 md:px-16 py-6  mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-400 pb-2 text-black">
          Our Story
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2 space-y-5 text-black text-lg leading-relaxed">
            <p>
              Royal Attire was founded with a simple belief: elegance should be
              effortless, timeless, and accessible for every gentleman.
            </p>
            <p>
              What began as a passion for refined menswear soon became a
              movement to redefine how men in Bangladesh — and beyond — dress
              with dignity, confidence, and style.
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
          <div className="md:w-1/2">
            <img
              src='https://i.ibb.co.com/vvwkXGC3/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-black-elegant.jpg'
              alt="Royal Attire Story"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-16  mx-auto">
        <div className="flex flex-col md:flex-row  gap-10">
          <div className="md:w-1/2">
            <img
              src='https://i.ibb.co.com/m5w5kZ73/Screenshot-2025-05-10-002942.png'
              alt="Our Mission and Vision"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 border-b border-gray-400 pb-2 text-black">
                Our Mission
              </h2>
              <p className="text-lg text-black leading-relaxed">
                To empower men to express confidence and class through
                premium-quality attire and style guidance tailored for every
                occasion.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 border-b border-gray-400 pb-2 text-black">
                Our Vision
              </h2>
              <p className="text-lg text-black leading-relaxed">
                To become the leading destination for elegant menswear in South
                Asia, blending tradition, innovation, and sustainability into
                every outfit we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 px-6 md:px-16">
        <div className=" mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-black">
            Sustainability & Materials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow hover:scale-[1.02] transition">
              <Leaf className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Eco-Conscious Fabrics
              </h3>
              <p className="text-black text-sm">
                We choose eco-conscious fabrics wherever possible, ensuring
                minimal environmental impact.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow hover:scale-[1.02] transition">
              <Recycle className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Ethical Tailors
              </h3>
              <p className="text-black text-sm">
                Partnering with ethical tailors and small-batch producers who
                value quality and responsibility.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow hover:scale-[1.02] transition">
              <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Reducing Waste
              </h3>
              <p className="text-black text-sm">
                Reducing waste through smart design and limited-run collections
                to minimize excess production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-20 px-6 md:px-16">
        <div className=" mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-black">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-left shadow hover:scale-[1.02] transition">
              <Gem className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Elegance
              </h3>
              <p className="text-black text-sm">
                Designs that speak with grace and presence — every piece is
                timeless.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-left shadow hover:scale-[1.02] transition">
              <ShieldCheck className="h-8 w-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Integrity
              </h3>
              <p className="text-black text-sm">
                Ethical sourcing, fair pricing, and branding with transparency.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-left shadow hover:scale-[1.02] transition">
              <Scissors className="h-8 w-8 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Craftsmanship
              </h3>
              <p className="text-black text-sm">
                Precision in every fabric, fit, and finish — built to impress
                and last.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-left shadow hover:scale-[1.02] transition">
              <Sparkles className="h-8 w-8 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Inspiration
              </h3>
              <p className="text-black text-sm">
                Empowering men to elevate their daily style through thoughtful
                fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 text-black">
        <div className=" mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-black">Our Team</h2>
          <p className="text-lg text-black mb-4">
            We are a growing collective of designers, stylists, and storytellers
            — united by a love for men’s fashion, Bangladeshi heritage, and
            modern design excellence.
          </p>
          <p className="text-lg text-black mb-8">
            Every piece we craft is backed by people who care deeply about
            quality, beauty, and your best first impression.
          </p>
          <div className="flex justify-center items-center gap-6">
            <Users className="h-12 w-12 text-black" />
            <p className="text-lg text-black italic">
              "Together, we bring your vision to life through passion and
              expertise."
            </p>
          </div>
        </div>
      </section>

      {/* Why Royal Attire */}
      <section className="bg-gradient-to-r from-gray-300 to-gray-100 text-black px-6 md:px-16 py-16 max-w-6xl mx-auto rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-8 text-black">
            Why Royal Attire?
          </h2>
          <p className="text-2xl text-black  mx-auto leading-relaxed tracking-wide">
            Because you don’t just wear clothes — you wear confidence,
            character, and legacy. At Royal Attire, we believe that style is an
            extension of who you are — not just something you wear.
          </p>
        </div>
        <div className="mt-12 relative">
          <div className="h-1 bg-black rounded-full max-w-md mx-auto"></div>
        </div>
        <div className="mt-8 text-center font-extrabold text-8xl opacity-5">
          <span className="transform rotate-12">STYLE</span>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
