import React, { useState } from "react";
import CheckMarkImage from "../../assets/check-mark.png";

const PaymentMethod = () => {
  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation or API calls here

    // Open the modal after successful payment
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Payment Method</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name on Card */}
          <div>
            <label className="block text-gray-700">Name on card:</label>
            <div className="relative mt-1">
              <input
                type="text"
                value={"Who Are You"}
                placeholder="Esther Howard"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <i className="fas fa-user text-gray-400"></i>{" "}
                {/* Replace with icon */}
              </div>
            </div>
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-gray-700">Card number:</label>
            <div className="relative mt-1">
              <input
                type="text"
                value={"00000000000"}
                placeholder="1234-5678-1234-5678"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-3 flex items-center">
                <i className="fas fa-credit-card text-gray-400"></i>{" "}
                {/* Replace with icon */}
              </div>
            </div>
          </div>

          {/* Expiry and CCV */}
          <div className="flex gap-4">
            {/* Expiry */}
            <div className="w-1/2">
              <label className="block text-gray-700">Expiry date:</label>
              <div className="relative mt-1">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <i className="fas fa-calendar-alt text-gray-400"></i>{" "}
                  {/* Replace with icon */}
                </div>
              </div>
            </div>

            {/* CCV */}
            <div className="w-1/2">
              <label className="block text-gray-700">CCV</label>
              <div className="relative mt-1">
                <input
                  type="password"
                  placeholder="•••"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <i className="fas fa-lock text-gray-400"></i>{" "}
                  {/* Replace with icon */}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Payment
          </button>
        </form>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 shadow-md rounded-lg max-w-sm text-center">
              <div className="mb-4 flex justify-center">
                <img className=" h-10 w-10 bg-primary p-2 rounded-full" src={CheckMarkImage} alt="" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Transaction Successful
              </h3>
              <p className="text-gray-500 mb-6">
                Your top up has been successfully done
              </p>
              <p className="text-lg font-semibold">$200.00</p>

              <button
                onClick={handleCloseModal}
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
