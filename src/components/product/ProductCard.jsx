import React from "react";
import { Link } from "react-router-dom";
import FoodImage from "../../assets/food.png";

const ProductCard = () => {
  return (
    <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-xs mx-auto md:max-w-sm lg:max-w-md">
      {/* Image div with Link */}
      <div className="w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
        <Link to="/product-details">
          {/* Add transition and scale effect */}
          <img
            src={FoodImage}
            className="object-contain object-center w-full h-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-90"
            alt="food"
          />
        </Link>
      </div>

      {/* Text div */}
      <div className="flex flex-col mt-4">
        {/* Product title with Link */}
        <Link to="/product-details">
          <h2 className="text-xl font-bold mb-2 truncate text-gray-900 cursor-pointer hover:text-green-600 transition-colors">
            Spinach & Mushroom
          </h2>
        </Link>

        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
          imperdiet lectus.
        </p>

        <h4 className="text-lg font-bold mb-2">$192.00</h4>

        {/* Order Now button */}
        <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
