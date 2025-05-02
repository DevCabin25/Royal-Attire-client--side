import React, { useState } from "react";

const categories = [
  { name: "All", image: "" },
  { name: "Formal Wear", image: "https://i.ibb.co.com/sJt4Ss8R/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated.jpg" },
  { name: "Casual Classics", image: "https://i.ibb.co.com/0R9k6MyX/young-joyful-student-man-holding-thumb-up-isolated.jpg" },
  { name: "Partywear ", image: "https://i.ibb.co.com/RpSsHFHP/Chat-GPT-Image-May-2-2025-09-33-18-PM.png" },
  { name: "Accessories", image: "https://i.ibb.co.com/ksc2wK7S/Chat-GPT-Image-May-2-2025-09-35-55-PM.png" }
];

const products = [
  { id: 1, name: "Classic Black Suit", category: "Formal Wear", price: "$199" },
  { id: 2, name: "White Formal Shirt", category: "Casual Classics", price: "$49" },
  { id: 3, name: "Slim Fit Trousers", category: "Partywear", price: "$79" },
  { id: 4, name: "Silk Tie", category: "Accessories", price: "$25" },
  { id: 5, name: "Linen Shirt", category: "Shirts", price: "$59" },
];

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Banner */}
      <div className="w-full h-64 bg-cover bg-center mb-8" style={{ backgroundImage: "url('https://i.ibb.co.com/qQb5hXm/young-successful-businessman-looking-camera.jpg')" }}>
        <div className="bg-black bg-opacity-80 h-full flex items-center justify-center">
          <h1 className="text-4xl font-serif md:text-5xl font-bold text-white">Elevate Your Style</h1>
        </div>
      </div>

      <div className="px-6">
        {/* Category Filter with Images */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`relative w-40 h-28 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === cat.name ? "border-4 border-black shadow-lg" : "border-2 border-transparent hover:border-gray-400 hover:shadow-md"
              }`}
            >
              {cat.image && (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 hover:opacity-80"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search elegant fashion..."
              className="border border-black px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="20"
              height="20"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-40 bg-gray-100 mb-4 rounded-lg overflow-hidden">
                {/* Add product image here if available */}
              </div>
              <h2 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.category}</p>
              <p className="mt-2 font-medium text-gray-900">{product.price}</p>

              <button
                className="mt-4 w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="mt-2 font-medium text-gray-900">{product.price}</p>

                <button
                  className="mt-4 w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
