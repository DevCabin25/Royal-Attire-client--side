import { Badge, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, price, image, category, isNew, isBestSeller } = product;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative hover-scale block"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-white text-black font-medium">
              New Arrival
            </Badge>
          )}
          {isBestSeller && (
            <Badge className="bg-black text-white font-medium">
              Best Seller
            </Badge>
          )}
        </div>

        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white py-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
          <ShoppingBag size={16} />
          <span className="text-sm font-medium">Quick Add</span>
        </div>
      </div>

      <div className="mt-4 space-y-1 text-left">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{name}</h3>
          <p className="font-semibold">${price}</p>
        </div>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
