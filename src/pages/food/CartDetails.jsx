// CartPage.jsx
import React from "react";
import CartItemCard from "../../components/product/CartItemCard";
import { Link } from "react-router-dom";

const CartDetails = () => {
  return (
    <div className="container mx-auto p-4 mb-16">
      <h1 className="text-2xl text-center font-bold mb-4">Cart Details</h1>

      {/* Render multiple RestaurentCartItem components */}
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />

      {/* Total Cost Section */}
      <div className="text-right mt-8">
        <div className="flex justify-center">
          <h2 className="text-2xl flex gap-4 justify-between font-bold text-primary text-center">
            <p>Total Cost:</p>
            <p>$ 1500</p>
          </h2>
        </div>
        <Link className="flex justify-center" to="/payment-method">
          <button className="mt-4 bg-primary w-[50%] text-white px-4 py-2 rounded-md transition-all duration-200 hover:bg-green-400">
            Payment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartDetails;
