import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      </div>
      <p className="mt-4 text-xl text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
