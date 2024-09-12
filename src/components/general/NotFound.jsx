import React from "react";
import NotFoundBgImage from "../../assets/auth-page.png";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const NotFound = () => {
  return (
    <div
      className="w-screen h-screen bg-contain relative bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${NotFoundBgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full">
        <h1 className="text-white font-bold text-3xl md:text-6xl">
          404 Not Found
        </h1>
        <div className=" text-gray-300 mt-4 text-medium">
          Visited Page Not Found ! Please Go To Home Page
        </div>

        <button className=" bg-indigo-500 px-16 py-3 rounded-md text-white font-bold mt-6 text-lg">
          <Link to="/"><HomeOutlined className="mr-2 text-lg"/>Home Page</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
