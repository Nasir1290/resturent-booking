import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard";

const hotels = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1625244695851-1fc873f942bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    title: "Villagio Restaurant & Bar Villagio Restaurant & Bar",
    price: 150,
    location: "360 San Lorenzo Avenu",
    date: "09/14/2024",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1718585322553-a77879e06ad5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    title: "Seaside Hotel",
    price: 200,
    location: "123 Beachfront Avenue, Miami, FL",
    date: "09/16/2024",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    title: "Mountain Retreat",
    price: 180,
    location: "789 Hilltop Lane, Denver, CO",
    date: "09/18/2024",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1711111038517-f5d61fe63008?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    title: "City Hotel",
    price: 220,
    location: "456 Downtown Street, New York, NY",
    date: "09/20/2024",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1718585322553-a77879e06ad5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    title: "Lakeside Resort",
    price: 250,
    location: "987 Lakeside Avenue, Orlando, FL",
    date: "09/22/2024",
  },
  // Add more hotel objects as needed
];

const ITEMS_PER_PAGE = 3;

const RestaurentsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the last hotel on the current page
  const lastHotelIndex = currentPage * ITEMS_PER_PAGE;
  // Calculate the index of the first hotel on the current page
  const firstHotelIndex = lastHotelIndex - ITEMS_PER_PAGE;
  // Get the hotels to display on the current page
  const currentHotels = hotels.slice(firstHotelIndex, lastHotelIndex);

  const totalPages = Math.ceil(hotels.length / ITEMS_PER_PAGE);

  // Handle Next Page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle Previous Page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Hotels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentHotels.map((hotel) => (
          <RestaurentCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 rounded-md ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-400"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-800">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-300 rounded-md ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-400"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RestaurentsPage;
