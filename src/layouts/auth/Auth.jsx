import React from "react";
import { Outlet } from "react-router-dom";
import AuthMainImage from "../../assets/auth-page.png";
import AuthTopImage from "../../assets/auth-top-image.png";

export default function Auth() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen p-4 lg:p-0">
      {/* Left section for image */}
      <div className="w-full hidden lg:w-[50%] md:flex justify-center mb-6 lg:mb-0">
        <img
          className="w-full lg:w-[80%] object-cover"
          src={AuthMainImage}
          alt="Auth"
        />
      </div>

      {/* Right section for form */}
      <div className="w-full lg:w-[50%] mx-auto grid">
        <div className="flex justify-center mb-3 lg:mb-6">
          <img
            className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover"
            src={AuthTopImage}
            alt="Auth Top"
          />
        </div>
        <div className="w-full px-4 md:px-6 lg:px-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
