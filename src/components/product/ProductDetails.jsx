import { useParams } from "react-router-dom";
import FoodDetailsImage from "../../assets/food-details.png";
import React, { useState } from "react";
import { allFoodData } from "../../data.js/foodData";
import ProductList from "./ProductList";
import { toast } from "react-toastify";
import toastValue from "../shared/toastValue";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(2);
  const { id } = useParams();
  
  // current Food Item
  const foodItem = allFoodData.find((food) => food.id === id);

  const relatedProducts = allFoodData.filter((food) => food.category === foodItem.category);

  // Default quantity
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div>
      <div className="max-w- mx-auto my-3 p-2 md:p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src={foodItem.image} // Replace with actual image URL
            alt="Product"
            className=" h-[30rem] w-[40rem] object-cover rounded-lg"
          />
        </div>
        {/* Product Info */}
        <div className="flex-grow ml-4">
          <h2 className="text-3xl font-bold mb-6">{foodItem.title}</h2>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {/* Replace with actual star icons */}
              {Array(foodItem.rating)
                .fill("")
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .288l2.833 8.718h9.167l-7.416 5.391 2.833 8.718-7.417-5.391-7.416 5.391 2.833-8.718-7.416-5.391h9.167z" />
                  </svg>
                ))}
            </div>
            <span className="text-secondary text-sm ml-4">
              ({foodItem.totalRatingCount} Reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl text-secondary font-semibold mb-4">
            Price:<span className=" ml-3 font-bold">${foodItem.price}</span>
          </p>

          {/* Description */}
          <p className="text-secondary my-5 leading-7">
            {foodItem.description}
          </p>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center md:gap-4 gap-1">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={handleDecrease}
                className="px-4 py-2 rounded-l-lg font-bold  bg-secondary text-xl text-white hover:bg-green-400"
              >
                −
              </button>
              <span className="px-8 py-2 text-xl font-semibold">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="px-4 rounded-r-lg py-2 flex justify-center items-center font-bold text-xl bg-primary text-white hover:bg-green-400"
              >
                +
              </button>
            </div>

            <button
            onClick={() => toast.success("Add To Cart Successfully.",toastValue)}
            className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
              Add to cart
            </button>

            {/* Favorite Button */}
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6 text-gray-600"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className=" text-2xl text-center font-bold text-secondary mt-8 mb-4">Related Foods</h1>
        <ProductList products={relatedProducts}/>
      </div>
    </div>
  );
};

export default ProductDetails;
