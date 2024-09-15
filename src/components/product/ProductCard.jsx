



import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import toastValue from "../shared/toastValue";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-full">
      {/* Image div with Link */}
      <div className="w-full h-56 md:h-64 lg:h-72 shadow-md rounded-lg overflow-hidden flex justify-center items-center">
        <Link to={`/food/${product.id}`}>
          {/* Add transition and scale effect */}
          <img
            src={product.image}
            className="object-cover object-center w-96 h-72 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-90"
            alt="food"
          />
        </Link>
      </div>

      {/* Text div */}
      <div className="flex flex-col mt-4">
        {/* Product title with Link */}
        <Link to="/product-details">
          <h2 className="text-lg lg:text-xl font-bold mb-2 truncate text-gray-900 cursor-pointer hover:text-green-600 transition-colors">
            {product.title }
          </h2>
        </Link>

        <p className="text-gray-600 text-sm lg:text-base mb-2 line-clamp-2">
          {product.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>

        <h4 className="text-md lg:text-lg font-bold mb-2">
          ${product.price || "192.00"}
        </h4>

        {/* Order Now button */}
        <button onClick={() => {

          toast.success("Item Add To Cart Successfully",toastValue)

        }} className="bg-secondary text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition-colors">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
