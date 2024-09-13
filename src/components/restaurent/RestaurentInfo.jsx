import React from "react";
import RestaurentDetailsImage from "../../assets/restaurent-detail.png";

const RestaurentInfo = () => {
  return (
    <div className="max-w-4xl mb-12 bg-white rounded-lg mt-8 mx-1 md:mx-auto shadow-md overflow-hidden">
      {/* Image Carousel Section */}
      <div className="relative">
        <img
          src={RestaurentDetailsImage}
          alt="Restaurant"
          className="w-full h-[400px] object-cover"
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
          Villagio Restaurant & Bar
        </h2>
        <p className="text-secondary mt-2">
          360 San Lorenzo Avenue, Suite 1430 Coral Gables, FL 33146-1865
        </p>

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
            Villagio restaurant and bar has one mission: to provide guests with
            a fine and fresh seafood experience. Featuring seasonal and
            sustainable seafood that is flown in fresh daily, our chef-driven
            menu proves that no matter when you’re dining, seafood can be truly
            exceptional.
            <span className="text-primary cursor-pointer"> Read More...</span>
          </p>
        </div>

        {/* Book Now Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg- bg-secondary text-white w-full px-6 py-2 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurentInfo;
