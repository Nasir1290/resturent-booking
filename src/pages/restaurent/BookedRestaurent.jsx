import React from 'react'
import { Link } from 'react-router-dom';
import RestaurentCard from './RestaurentCard';
import RestaurentCartItem from '../../components/restaurent/RestaurentCartItem';

const BookedRestaurent = () => {
  return (
    <div className="container mx-auto p-4 mb-16">
      <h1 className="text-2xl text-center font-bold mb-4">Booked Restaurent</h1>

      {/* Render multiple RestaurentCartItem components */}
      <RestaurentCartItem />
      <RestaurentCartItem />
      <RestaurentCartItem />
      <RestaurentCartItem />

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
}

export default BookedRestaurent
