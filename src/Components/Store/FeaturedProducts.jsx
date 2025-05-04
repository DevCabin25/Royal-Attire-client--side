import { useState } from "react";
import { products, categories } from "../../data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
            Featured Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest arrivals crafted with precision and style for the modern gentleman.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm transition-colors ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a href="#shop" className="btn-primary">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
