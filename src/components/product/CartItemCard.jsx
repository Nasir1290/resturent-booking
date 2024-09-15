import React from "react";
import FoodItemImage from "../../assets/food-items.png";

const CartItemCard = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-36 my-4 mx-4 rounded-md w-[90%] object-cover md:w-48"
            src={FoodItemImage}
            alt="Burger"
          />
        </div>

        <div className="p-6 font-bold text-gray-100 w-full">
          <div className="uppercase tracking-wide text-xl flex justify-between text-amber-400 font-semibold">
            <p>Category:</p>
            <p>Burger</p>
          </div>
          <div className="mt-2 flex justify-between text-teal-300">
            <p>Order Quantity:</p>
            <p>4</p>
          </div>
          <div className="mt-2 flex justify-between text-teal-300">
            <p>Price: </p>
            <p>$120</p>
          </div>
          <div className="mt-2 flex justify-between text-teal-300">
            <p>Order Date: </p>
            <p>June 4, 2024</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mr-6 mb-2">
        <button className=" px-16 py-2 bg-primary text-sm font-semibold text-white mr-4 rounded ">
          Details
        </button>
        <button className=" px-16 py-2 bg-orange-500 text-sm font-semibold text-white rounded ">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
