import React from "react";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/general/Loading";
import HeroSection from "../../components/home/HeroSection";
import ProductCard from "../../components/product/ProductCard";
import ProductDetails from "../../components/product/ProductDetails";
import { IoIosArrowDropdown } from "react-icons/io";
import ServiceSection from "../../components/home/ServiceSection";
import MobileAppSection from "../../components/home/MobileAppSection";

export default function Home() {
  const { user, loading } = useAuth();
  console.log({ user });
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <HeroSection />
      <div className=" mx-6 md:mx-24 flex justify-between md:items-start items-center">
        <h2 className=" text-xl  md:text-3xl font-semibold">
          Explore <span className=" text-primary">Yummy</span> Recipe
        </h2>
        <button className=" flex justify-center items-center">
          {" "}
          See All <IoIosArrowDropdown className=" md:text-lg ml-2" />{" "}
        </button>
      </div>
      <ProductDetails />
      <ServiceSection/>
      <MobileAppSection/>
    </div>
  );
}
