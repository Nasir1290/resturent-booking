import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { allHotelData } from "../../data.js/hotelData";
import RestaurentList from "./RestaurentList";

const RestaurentsPage = () => {
  const [allHotelItem, setAllHotelItem] = useState([...allHotelData]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Hotels</h1>
      <RestaurentList allHotelItem={allHotelItem} />

      {/* Pagination Controls */}
    </div>
  );
};

export default RestaurentsPage;
