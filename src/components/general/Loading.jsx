import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Spinner Loader */}
      <div className="flex flex-col items-center">
        <FaSpinner className="animate-spin text-4xl text-blue-600 mb-4" />
        <h2 className="text-lg font-semibold text-blue-600">Loading...</h2>
      </div>

      {/* Skeleton Loader */}
      {/* <div className="mt-8 w-11/12 md:w-2/3 lg:w-1/2 space-y-4">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        </div>
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-300 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
