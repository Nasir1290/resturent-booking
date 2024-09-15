import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/general/Loading";
import HeroSection from "../../components/home/HeroSection";
import { IoIosArrowDropdown } from "react-icons/io";
import ServiceSection from "../../components/home/ServiceSection";
import MobileAppSection from "../../components/home/MobileAppSection";
import ProductList from "../../components/product/ProductList";
import { allFoodData } from "../../data.js/foodData";

export default function Home() {
  const { user, loading } = useAuth();
  const [isShowAllData, setIsShowAllData] = useState(false);
  const fourItem = [
    allFoodData[0],
    allFoodData[23],
    allFoodData[12],
    allFoodData[36],
    allFoodData[30],
    allFoodData[6],
  ];

  const [allData, setAllData] = useState(fourItem);
  console.log({ isShowAllData });
  console.log({ allData });

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <HeroSection />
      <div className=" mx-6 md:mx-24 flex justify-between md:items-start items-center">
        <h2 className=" text-xl  md:text-3xl mb-6 font-semibold">
          Explore <span className=" text-primary">Yummy</span> Recipe
        </h2>

        {isShowAllData ? (
          // show less
          <button
            onClick={() => {
              setIsShowAllData(!isShowAllData);
              setAllData(fourItem);
            }}
            className=" flex justify-center items-center"
          >
            {" "}
            See Less <IoIosArrowDropdown className=" md:text-lg ml-2" />{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              setIsShowAllData(!isShowAllData);
              setAllData([...allFoodData]);
            }}
            className=" flex justify-center items-center"
          >
            {" "}
            See All <IoIosArrowDropdown className=" md:text-lg ml-2" />{" "}
          </button>
        )}
      </div>
      <ProductList products={allData} />
      <ServiceSection />
      <MobileAppSection />
    </div>
  );
}
