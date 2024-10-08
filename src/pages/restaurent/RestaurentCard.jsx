import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import toastValue from "../../components/shared/toastValue";
import AOS from "aos";
import "aos/dist/aos.css";

const RestaurentCard = ({ hotel }) => {
    useEffect(() => {
      AOS.init({ duration: 1000 }); // Initializes AOS with a duration of 1000ms
    }, []);
  return (
    // Make the card container a flexbox and set it to grow vertically
    <div data-aos="fade-in" className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4 flex flex-col">
      {/* Wrap the image with a Link to make it clickable */}
      <Link to={`/hotel/${hotel.id}`}>
        <img
          className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75"
          src={hotel?.image}
          alt={hotel?.title}
        />
      </Link>

      {/* Set flex-grow on the content to fill available space, pushing the button to the bottom */}
      <div className="p-4 flex-grow">
        {/* Wrap the title with a Link to make it clickable */}
        <Link to={`/hotel/${hotel.id}`}>
          <h2 className="text-xl font-bold text-secondary transition-all duration-200 hover:text-green-500">
            {hotel?.title}
          </h2>
        </Link>
        <p className="text-secondary">Location: {hotel?.location}</p>
        <div className="flex justify-between mt-2">
          <span className="text-gray-800 font-bold">
            Price: ${hotel?.price} / night
          </span>
        </div>
      </div>

      {/* Ensure the button is always at the bottom */}
      <div className="p-4">
        <button onClick={() => {
          toast.success("Restaurent Booked Successfully",toastValue)
        }} className="w-full transition-all bg-primary text-white py-2 px-4 rounded-md hover:bg-green-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RestaurentCard;
