import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { ShoppingBag } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container-custom py-20">
        <h1 className="text-2xl font-semibold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container-custom py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold">${product.price}</p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">{product.description}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Category:</span>
              <span className="text-sm font-medium">{product.category}</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-black text-white py-4 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
            <ShoppingBag size={20} />
            <span>Add to Cart</span>
          </button>

          {/* Additional Info */}
          <div className="border-t pt-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Product Details</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Premium quality materials</li>
                <li>Expert craftsmanship</li>
                <li>Perfect for any occasion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
