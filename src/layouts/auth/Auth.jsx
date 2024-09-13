import React from "react";
import { Outlet } from "react-router-dom";
import AuthMainImage from "../../assets/auth-page.png";
import AuthTopImage from "../../assets/auth-top-image.png";

export default function Auth() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Outer container with responsive margin and padding */}
      <div className="w-full max-w-4xl mx-4 md:mx-8 my-6 md:my-8 flex items-center justify-center">
        {/* Bordered container with rounded corners and shadow */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full bg-white border-2 shadow rounded-md overflow-hidden">
          {/* Left section for image - Hidden on small screens */}
          <div className="hidden lg:flex md:w-[40%] h-full relative">
            <img
              className="w-full h-full my-2 object-cover md:mr-6"
              src={AuthMainImage}
              alt="Auth"
            />
          </div>

          {/* Right section for form */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6">
            {/* Top image */}
            <div className="mb-6 flex justify-center">
              <img
                className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
                src={AuthTopImage}
                alt="Auth Top"
              />
            </div>

            {/* Form section */}
            <div className="w-full max-w-md">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
