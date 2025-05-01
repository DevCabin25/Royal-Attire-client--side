import React, { useState } from "react";

const categories = [
  { name: "All", image: "" },
  { name: "Suits", image: "/images/categories/suits.jpg" },
  { name: "Shirts", image: "/images/categories/shirts.jpg" },
  { name: "Trousers", image: "/images/categories/trousers.jpg" },
  { name: "Accessories", image: "/images/categories/accessories.jpg" }
];

const products = [
  { id: 1, name: "Classic Black Suit", category: "Suits", price: "$199" },
  { id: 2, name: "White Formal Shirt", category: "Shirts", price: "$49" },
  { id: 3, name: "Slim Fit Trousers", category: "Trousers", price: "$79" },
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
      <div className="w-full h-64 bg-cover bg-center mb-8" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Elevate Your Style</h1>
        </div>
      </div>

      <div className="px-6">
        {/* Category Filter with Images */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`relative w-32 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition duration-300 ${
                selectedCategory === cat.name ? "border-black" : "border-transparent hover:border-gray-400"
              }`}
            >
              {cat.image && (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search elegant fashion..."
            className="border border-black px-4 py-2 w-full max-w-md rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-black rounded-lg p-4 hover:shadow-lg transition duration-300"
            >
              <div className="h-40 bg-gray-100 mb-4 rounded"></div>
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-sm text-gray-700">{product.category}</p>
              <p className="mt-2 font-medium">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
