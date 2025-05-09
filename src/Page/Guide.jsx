import React, { useState } from 'react';

const Guide = () => {
  const [activeCategory, setActiveCategory] = useState('seasonal'); // Set default category to 'seasonal'

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* Category Navigation */}
        <div className="space-x-4 text-center">
          <button
            className={`text-lg ${activeCategory === 'seasonal' ? 'bg-black text-white p-2 px-6 rounded-2xl' : ''} text-black font-semibold`}
            onClick={() => handleCategoryClick('seasonal')}
          >
            Seasonal Fashion
          </button>
          <button
            className={`text-lg ${activeCategory === 'occasion' ? 'bg-black text-white p-2 px-6 rounded-2xl' : ''} font-semibold text-black`}
            onClick={() => handleCategoryClick('occasion')}
          >
            Occasion-Based Fashion
          </button>
        </div>

        {/* Seasonal Fashion Section */}
        {activeCategory === 'seasonal' && (
          <section className="my-16">
            <h2 className="text-3xl font-semibold">Seasonal Fashion</h2>

            {/* Summer Style */}
            <div className="mt-8 p-6 border border-gray-300 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700">Summer Style</h3>
              <ul className="list-disc pl-8">
                <li>Light Fabrics: Cotton, linen, and blends for breathability.</li>
                <li>Colors to Wear: Pastels, whites, sky blues, beige, mint green.</li>
                <li>Royal Picks:
                  <ul className="pl-8">
                    <li>Sky Blue Linen Kurta</li>
                    <li>Olive Green Polo T-Shirt</li>
                    <li>Beige Cotton Chinos</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4 text-gray-500">Pro Tip: Roll up your sleeves and pair with loafers or kolhapuri sandals.</p>
            </div>

            {/* Winter Wear */}
            <div className="mt-12 p-6 border border-gray-300 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-700">Winter Wear</h3>
              <ul className="list-disc pl-8">
                <li>Layering Matters: Wool-blend blazers, waistcoats for warmth.</li>
                <li>Colors to Wear: Deep maroon, charcoal, navy, forest green.</li>
                <li>Royal Picks:
                  <ul className="pl-8">
                    <li>Midnight Black Slim-Fit Suit</li>
                    <li>Navy Kurta with Jacket Combo</li>
                    <li>Black Textured Waistcoat</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4 text-gray-500">Pro Tip: Add bold brooches for evening glam.</p>
            </div>
          </section>
        )}

        {/* Occasion-Based Fashion Section */}
        {activeCategory === 'occasion' && (
          <section className="my-16">
            <h2 className="text-3xl font-semibold">Occasion-Based Fashion</h2>

            {/* Everyday Essentials */}
            <div className="mt-8 p-6 border border-gray-300 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-700">Everyday Essentials</h3>
              <ul className="list-disc pl-8">
                <li>Comfort meets class — polos, slim-fit chinos, and mandarin shirts.</li>
                <li>Royal Picks:
                  <ul className="pl-8">
                    <li>Classic White Mandarin Shirt</li>
                    <li>Navy Denim Shirt</li>
                    <li>Textured Leather Belt</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Business & Formal Events */}
            <div className="mt-12 p-6 border border-gray-300 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-700">Business & Formal Events</h3>
              <ul className="list-disc pl-8">
                <li>Dress to lead — structured suits, classic shirts.</li>
                <li>Royal Picks:
                  <ul className="pl-8">
                    <li>Midnight Black Suit</li>
                    <li>Premium White Formal Shirt</li>
                    <li>Classic Gold Cufflinks</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4 text-gray-500">Style Tip: Never underestimate the power of a perfectly ironed shirt.</p>
            </div>

            {/* Weddings & Festivals */}
            <div className="mt-12 p-6 border border-gray-300 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-700">Weddings & Festivals</h3>
              <ul className="list-disc pl-8">
                <li>Rich textures, embroidered kurtas, and accessories shine.</li>
                <li>Royal Picks:
                  <ul className="pl-8">
                    <li>Maroon Velvet Embroidered Kurta</li>
                    <li>Ivory Heritage Sherwani</li>
                    <li>Emerald Green Brooch</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4 text-gray-500">Style Tip: Coordinate with event themes or family colors, and never skip your waistcoat!</p>
            </div>

            {/* Parties & Celebrations */}
            <div className="mt-12 p-6 border border-gray-300 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-700">Parties & Celebrations</h3>
              <ul className="list-disc pl-8">
                <li>Sleek and slightly edgy — satin finishes, fitted kurta sets.</li>
                <li>Royal Picks:
                  <ul className="pl-8">
                    <li>Golden Beige Panjabi</li>
                    <li>Royal Blue Kurta-Jacket Set</li>
                    <li>Statement Pocket Squares</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Cultural Events */}
            <div className="mt-12 p-6 border border-gray-300 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-green-700">Cultural Events</h3>
              <ul className="list-disc pl-8">
                <li>Cultural storytelling through fashion, worn during Eid, Pohela Boishakh, weddings, and religious festivals.</li>
                <li>Royal Picks:
                  <ul className="pl-8">
                    <li>Maroon Embroidered Panjabi</li>
                    <li>Off-White Cotton Kurta with Red Detailing</li>
                    <li>Golden Beige Festival Panjabi</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4 text-gray-500">Royal Tip: Pair the panjabi with a shawl for evening elegance.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Guide;
