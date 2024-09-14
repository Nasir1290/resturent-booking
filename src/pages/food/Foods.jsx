import React, { useState } from "react";
import ProductList from "../../components/product/ProductList";
import {useRef} from "react"

const Foods = () => {
  return (
    <div>
      <div>
        <div className=" mb-8  p-4">
          {/* Food Navigation */}
          <FoodNavigation />

          {/* Search Bar */}
          <SearchBar />
        </div>
      </div>
      <div>
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mt-8">
          Explore <span className="text-primary mr-2">Yummy</span>Recipe
        </h1>
        <ProductList />
      </div>
    </div>
  );
};

const FoodNavigation = () => {
  const [activeItem, setActiveItem] = useState("Rice"); // Default active item
  const categoriesRef = useRef(null);

  // Function to scroll the categories container to the left
  const scrollLeft = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({
        left: -110,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll the categories container to the right
  const scrollRight = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({
        left: 110,
        behavior: "smooth",
      });
    }
  };

  // Function to handle item click and change the active state
  const handleItemClick = (item) => {
    setActiveItem(item); // Update active item
  };

  return (
    <div className="w-full bg-primary py-2 px-4 flex justify-between items-center">
      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className="bg-[#5f8638] text-white p-2 rounded-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      {/* Food Categories */}
      <div
        ref={categoriesRef}
        className="flex items-center space-x-4 overflow-x-auto scrollbar-hide"
      >
        {["Pizza", "Rice", "Kabab", "Sushi", "Fry", "Chicken"].map((item) => (
          <button
            key={item}
            onClick={() => handleItemClick(item)}
            className={`px-4 py-2 rounded ${
              activeItem === item
                ? "bg-gray-500 text-white" // Active styles
                : "bg-transparent hover:bg-gray-200" // Inactive styles
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className="bg-[#5f8638] text-white p-2 rounded-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};


const SearchBar = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex items-center border rounded-full w-96 px-4 py-2 bg-white">
        <input
          type="text"
          placeholder="Search food"
          className="w-full outline-none bg-transparent text-sm"
        />
        <button className="bg-primary text-white p-2 rounded-full ml-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M10 19a9 9 0 100-18 9 9 0 000 18z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Foods;
