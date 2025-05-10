import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaSearch, FaRegHeart } from "react-icons/fa";

const Guide = () => {
  const [activeCategory, setActiveCategory] = useState("seasonal");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  const toggleFavorite = (item) => {
    setFavorites((prev) =>
      prev.includes(item) ? prev.filter((fav) => fav !== item) : [...prev, item]
    );
  };

  const seasonalData = {
    summer: {
      image: "/images/summer-style.jpg",
      title: "Summer Style",
      color: "text-blue-700",
      items: [
        "Sky Blue Linen Kurta",
        "Olive Green Polo T-Shirt",
        "Beige Cotton Chinos",
      ],
    },
    winter: {
      image: "/images/winter-wear.jpg",
      title: "Winter Wear",
      color: "text-blue-700",
      items: [
        "Midnight Black Slim-Fit Suit",
        "Navy Kurta with Jacket Combo",
        "Black Textured Waistcoat",
      ],
    },
  };

  const occasionData = {
    everyday: {
      image: "/images/everyday-essentials.jpg",
      title: "Everyday Essentials",
      color: "text-green-700",
      items: [
        "Classic White Mandarin Shirt",
        "Navy Denim Shirt",
        "Textured Leather Belt",
      ],
    },
    business: {
      image: "/images/business-formal.jpg",
      title: "Business & Formal Events",
      color: "text-green-700",
      items: [
        "Midnight Black Suit",
        "Premium White Formal Shirt",
        "Classic Gold Cufflinks",
      ],
    },
    // ... other occasion data
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search fashion items..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-lg px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === "seasonal"
                ? "bg-black text-white shadow-lg"
                : "bg-white text-black hover:bg-gray-100"
            }`}
            onClick={() => handleCategoryClick("seasonal")}
          >
            Seasonal Fashion
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-lg px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === "occasion"
                ? "bg-black text-white shadow-lg"
                : "bg-white text-black hover:bg-gray-100"
            }`}
            onClick={() => handleCategoryClick("occasion")}
          >
            Occasion-Based Fashion
          </motion.button>
        </div>

        {/* Seasonal Fashion Section */}
        {activeCategory === "seasonal" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-16"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Seasonal Fashion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(seasonalData).map(([key, data]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(data.title)}
                      className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
                    >
                      {favorites.includes(data.title) ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-2xl font-semibold ${data.color}`}>
                      {data.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {data.items.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Occasion-Based Fashion Section */}
        {activeCategory === "occasion" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-16"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Occasion-Based Fashion
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(occasionData).map(([key, data]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(data.title)}
                      className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
                    >
                      {favorites.includes(data.title) ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-2xl font-semibold ${data.color}`}>
                      {data.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {data.items.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
};

export default Guide;
