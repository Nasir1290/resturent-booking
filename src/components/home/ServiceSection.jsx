// // import React from "react";
// // import ServiceSectionImage from "../../assets/service-section.png";
// // import OnlineOrderImage from "../../assets/online-ordering.png";
// // import Availability from "../../assets/availability.png";
// // import AdvancedReservationImage from "../../assets/advance-reservation.png";
// // import CuratedDiningPageImage from "../../assets/curated-dining-space.png";
// // import TopChefsImage from "../../assets/top-chefs.png";
// // import ImmaculateImage from "../../assets/immaculate-kitchen.png";
// // import SubHeroSectionImage from "../../assets/sub-hero-sub.png";

// // const ServiceSection = () => {
// //   const allItems = [
// //     { image: OnlineOrderImage, text: "Online Ordering" },
// //     { image: Availability, text: "24/7 Availability" },
// //     { image: AdvancedReservationImage, text: "Top Chefs" },
// //     { image: CuratedDiningPageImage, text: "Curated Dining Space" },
// //     { image: TopChefsImage, text: "Top Chefs" },
// //     { image: ImmaculateImage, text: "Immaculate Kitchens" },
// //   ];
// //   return (
// //     <div className=" px-6 lg:px-16 py-12">
// //       <div className="hidden sm:flex justify-center -mb-6 -rotate-3">
// //         <img className=" w-96" src={SubHeroSectionImage} alt="image" />
// //       </div>
// //       <div className="flex flex-col lg:flex-row items-center justify-between">
// //         {/* Left side - Image */}
// //         <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
// //           <img
// //             src={ServiceSectionImage}
// //             alt="Dining People"
// //             className="w-[400px] h-auto"
// //           />
// //         </div>

// //         {/* Right side - Text */}
// //         <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
// //           <h2 className="text-3xl lg:text-5xl font-bold">
// //             We are <span className="text-primary">more</span> than multiple
// //             service
// //           </h2>
// //           <p className="text-gray-600 text-lg">
// //             This is a type of restaurant which typically serves food and drink,
// //             in addition to light refreshments such as baked goods or snacks. The
// //             term comes from the French word meaning &qout;food.&qout;
// //           </p>

// //           {/* Icon section */}
// //           <div className="flex justify-center lg:justify-start space-x-8 text-4xl text-gray-600">
// //             {allItems.map((items, index) => (
// //               <div key={index} className="flex gap-4">
// //                 <img src={items.image} alt="image" />
// //                 <p className="text-sm">{items.text}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServiceSection;

// import React from "react";
// import ServiceSectionImage from "../../assets/service-section.png";
// import OnlineOrderImage from "../../assets/online-ordering.png";
// import Availability from "../../assets/availability.png";
// import AdvancedReservationImage from "../../assets/advance-reservation.png";
// import CuratedDiningPageImage from "../../assets/curated-dining-space.png";
// import TopChefsImage from "../../assets/top-chefs.png";
// import ImmaculateImage from "../../assets/immaculate-kitchen.png";
// import SubHeroSectionImage from "../../assets/sub-hero-sub.png";

// const ServiceSection = () => {
//   const allItems = [
//     { image: OnlineOrderImage, text: "Online Ordering" },
//     { image: Availability, text: "24/7 Availability" },
//     { image: AdvancedReservationImage, text: "Top Chefs" },
//     { image: CuratedDiningPageImage, text: "Curated Dining Space" },
//     { image: TopChefsImage, text: "Top Chefs" },
//     { image: ImmaculateImage, text: "Immaculate Kitchens" },
//   ];

//   return (
//     <div className="px-6 lg:px-16 py-12">
//       {/* Decorative Image */}
//       <div className="hidden sm:flex justify-center -mb-4 -rotate-4">
//         <img
//           className="w-64 sm:w-96 -mb-3 z-0 mr-16 -rotate-3"
//           src={SubHeroSectionImage}
//           alt="image"
//         />
//       </div>

//       {/* Main Section */}
//       <div className=" z-10 flex flex-col lg:flex-row items-center justify-between">
//         {/* Left Side - Image */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
//           <img
//             src={ServiceSectionImage}
//             alt="Dining People"
//             className="w-[300px] sm:w-[350px] lg:w-[400px] h-auto"
//           />
//         </div>

//         {/* Right Side - Text */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
//           <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
//             We are <span className="text-primary">more</span> than multiple
//             service
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-lg">
//             This is a type of restaurant which typically serves food and drink,
//             in addition to light refreshments such as baked goods or snacks. The
//             term comes from the French word meaning "food."
//           </p>

//           {/* Icon Section */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 text-center lg:text-left">
//             {allItems.map((items, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <img src={items.image} alt="icon" className="w-6 h-6 mb-2" />
//                 <p className="text-sm">{items.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceSection;








import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceSectionImage from "../../assets/service-section.png";
import OnlineOrderImage from "../../assets/online-ordering.png";
import Availability from "../../assets/availability.png";
import AdvancedReservationImage from "../../assets/advance-reservation.png";
import CuratedDiningPageImage from "../../assets/curated-dining-space.png";
import TopChefsImage from "../../assets/top-chefs.png";
import ImmaculateImage from "../../assets/immaculate-kitchen.png";
import SubHeroSectionImage from "../../assets/sub-hero-sub.png";

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS with a 1000ms animation duration
  }, []);

  const allItems = [
    { image: OnlineOrderImage, text: "Online Ordering" },
    { image: Availability, text: "24/7 Availability" },
    { image: AdvancedReservationImage, text: "Top Chefs" },
    { image: CuratedDiningPageImage, text: "Curated Dining Space" },
    { image: TopChefsImage, text: "Top Chefs" },
    { image: ImmaculateImage, text: "Immaculate Kitchens" },
  ];

  return (
    <div className="px-6 lg:px-16 py-12">
      {/* Decorative Image */}
      <div
        className="hidden sm:flex justify-center -mb-4 -rotate-4"
        data-aos="fade-up" // AOS animation added
      >
        <img
          className="w-64 sm:w-96 -mb-3 z-0 mr-16 -rotate-3"
          src={SubHeroSectionImage}
          alt="image"
        />
      </div>

      {/* Main Section */}
      <div className="z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side - Image */}
        <div
          className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0"
          data-aos="fade-right" // AOS animation added
        >
          <img
            src={ServiceSectionImage}
            alt="Dining People"
            className="w-[300px] sm:w-[350px] lg:w-[400px] h-auto"
          />
        </div>

        {/* Right Side - Text */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
          data-aos="fade-left" // AOS animation added
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
            We are <span className="text-primary">more</span> than multiple
            service
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg">
            This is a type of restaurant which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes from the French word meaning "food."
          </p>

          {/* Icon Section */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 text-center lg:text-left"
            data-aos="zoom-in" // AOS animation added for the icons
          >
            {allItems.map((items, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                data-aos="fade-up" // AOS animation for each icon
                data-aos-delay={index * 100} // Stagger animation for each icon
              >
                <img src={items.image} alt="icon" className="w-6 h-6 mb-2" />
                <p className="text-sm">{items.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
