// import React from "react";
// import MobileAppSelectionImage from "../../assets/mobile-app-selection.png";
// import SubHeroSectionImage from "../../assets/sub-hero-sub-rotate.png";

// const MobileAppSection = () => {
//   return (
//     <div className=" bg-white py-12 px-6 lg:px-16 space-y-8 lg:space-y-0">
//       <div className="hidden sm:flex justify-center -mb-4 -rotate-4">
//         <img
//           className="w-64 sm:w-96 -mb-3 z-0 -mr-28 -rotate-3"
//           src={SubHeroSectionImage}
//           alt="image"
//         />
//       </div>
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
//         {/* Left Side - Text Section */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
//           <h2 className="text-2xl lg:text-5xl font-bold">
//             It's Now More Easy to <span className="text-primary">Booking</span>{" "}
//             by Our Mobile App
//           </h2>
//           <p className="text-gray-600 text-base lg:text-lg">
//             All you need to do is download one of the best delivery apps, make
//             an account, and most companies are opting for mobile app development
//             for food delivery.
//           </p>

//           {/* App Store Buttons */}
//           <div className="flex justify-center lg:justify-start space-x-4">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//               alt="Google Play"
//               className="w-36"
//             />
//             <img
//               src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//               alt="App Store"
//               className="w-36"
//             />
//           </div>
//         </div>

//         {/* Right Side - Image Section */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
//           <div className="relative">
//             <img
//               src={MobileAppSelectionImage}
//               alt="Mobile App Display"
//               className="w-[300px] lg:w-[400px] rounded-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileAppSection;









import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileAppSelectionImage from "../../assets/mobile-app-selection.png";
import SubHeroSectionImage from "../../assets/sub-hero-sub-rotate.png";

const MobileAppSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS with a 1000ms duration
  }, []);

  return (
    <div className="bg-white py-12 px-6 lg:px-16 space-y-8 lg:space-y-0">
      {/* Decorative Image */}
      <div
        className="hidden sm:flex justify-center -mb-4 -rotate-4"
        data-aos="fade-up" // AOS animation
      >
        <img
          className="w-64 sm:w-96 -mb-3 z-0 -mr-28 -rotate-3"
          src={SubHeroSectionImage}
          alt="image"
        />
      </div>

      {/* Main Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Side - Text Section */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left space-y-4"
          data-aos="fade-right" // AOS animation
        >
          <h2 className="text-2xl lg:text-5xl font-bold">
            It's Now More Easy to <span className="text-primary">Booking</span>{" "}
            by Our Mobile App
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            All you need to do is download one of the best delivery apps, make
            an account, and most companies are opting for mobile app development
            for food delivery.
          </p>

          {/* App Store Buttons */}
          <div className="flex justify-center lg:justify-start space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-36"
              data-aos="fade-up" // AOS animation
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-36"
              data-aos="fade-up" // AOS animation
              data-aos-delay="200" // Delay for staggered effect
            />
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          data-aos="fade-left" // AOS animation
        >
          <div className="relative">
            <img
              src={MobileAppSelectionImage}
              alt="Mobile App Display"
              className="w-[300px] lg:w-[400px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
