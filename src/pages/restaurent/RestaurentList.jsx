import React from 'react'
import RestaurentCard from './RestaurentCard';

const RestaurentList = ({allHotelItem}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {allHotelItem.map((hotel) => (
        <RestaurentCard key={hotel.id+Math.random()*3} hotel={hotel} />
      ))}
    </div>
  );
}

export default RestaurentList
