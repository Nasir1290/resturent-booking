import React, { useState } from "react";
import CheckMarkImage from "../../assets/check-mark.png";
import GuestImage from "../../assets/guest.png";
import DateImage from "../../assets/booking-date.png"
import CloseButtonImage from "../../assets/close-button.png";

const BookingModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <img className="h-6 w-6" src={CloseButtonImage} alt="close" />
            </button>
            <div className="flex flex-col items-center">
              {/* Success Icon */}
              <div className=" mb-4">
                <img
                  className=" w-12 h-12 text-sm p-3 font-thin bg-primary rounded-full"
                  src={CheckMarkImage}
                  alt=""
                />
              </div>
              {/* Success Text */}
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Table Booked Successfully
              </h2>
              <p className="text-sm text-gray-500 mb-4 text-center">
                Your table has been successfully booked.
              </p>

              {/* Booking Information */}
              <div className="bg-gray-100 rounded-lg p-4 w-full mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className=" w-4 h-4 mr-4"
                      src={DateImage}
                      alt="guest"
                    />
                    <span className="text-sm font-thin">
                      17 December 2022 | 12:15 PM
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center">
                  <img className=" w-4 h-4 mr-4" src={GuestImage} alt="guest" />
                  <span className="text-sm font-thin">3 Guests</span>
                </div>
              </div>

              {/* Share Menu Button */}
              <button className="bg-primary hover:bg-green-600 text-white px-4 py-2 rounded-lg w-full">
                Show Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
