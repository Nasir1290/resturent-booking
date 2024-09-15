import React, { useState } from "react";
import RestaurentDetailsImage from "../../assets/restaurent-detail.png";
import BookingModal from "./BookingModal";
import { allHotelData } from "../../data.js/hotelData";
import RestaurentsPage from "../../pages/restaurent/RestaurentsPage";
import RestaurentList from "../../pages/restaurent/RestaurentList";

const RestaurentInfo = ({ restaurent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const randomTo = Math.random();
  const sixRestaurent = [
    allHotelData[Math.floor(randomTo * 5)],
    allHotelData[Math.floor(randomTo * 8)],
    allHotelData[Math.floor(randomTo * 10)],
    allHotelData[Math.floor(randomTo * 15)],
    allHotelData[Math.floor(randomTo * 17)],
    allHotelData[Math.floor(randomTo * 18)],
  ];

  return (
    <div>
      <div className="max-w-4xl mb-12 bg-white rounded-lg mt-8 mx-1 md:mx-auto shadow-md overflow-hidden">
        {/* Image Carousel Section */}
        <div className="relative">
          <img
            src={restaurent.image}
            alt="Restaurant"
            className="w-full h-[30rem] object-cover border-4 rounded border-cyan-300 shadow"
          />

          {/* Left Arrow */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Restaurant Info Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {restaurent.title}
          </h2>
          <p className="text-secondary mt-2">{restaurent.location}</p>

          {/* Booking Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Book a table</h3>
            <div className="flex space-x-4 mt-2">
              <input
                type="date"
                className="border p-2 rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="Date"
                defaultValue={new Date().toISOString().split("T")[0]} // Sets today's date as default
              />
              <input
                type="time"
                className="border p-2 rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="Time"
                defaultValue="12:00" // Default time set to 12:00
              />
              <select
                className="border p-2 rounded-lg focus:ring-2 focus:ring-primary"
                defaultValue="2" // Default number of people set to 2
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>

          {/* Restaurant Description */}
          <div className="mt-4">
            <p className="text-secondary">
              {restaurent.description}
              <span className="text-primary cursor-pointer"> Read More...</span>
            </p>
          </div>

          {/* Book Now Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="bg- bg-secondary text-white w-full px-6 py-2 rounded-lg"
            >
              Book Now
            </button>
            <BookingModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Related Hotels</h1>
      <RestaurentList allHotelItem={sixRestaurent} />
    </div>
  );
};

export default RestaurentInfo;
