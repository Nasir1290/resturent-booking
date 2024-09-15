

import React, { useEffect } from "react";
import ProductCard from "./ProductCard";import AOS from "aos";
import "aos/dist/aos.css";


const ProductList = ({ selectedCategory, products }) => {
  let allProducts = [...products];

  if (selectedCategory) {
    if (selectedCategory.toLowerCase() === "all") {
      allProducts = [...products];
    } else {
      allProducts = products?.filter(
        (product) =>
          product?.category?.toLowerCase() === selectedCategory?.toLowerCase()
      );
    }
  }

  console.log({ selectedCategory }, { allProducts });

    useEffect(() => {
      AOS.init({ duration: 2000 }); // Initializes AOS with a duration of 1000ms
    }, []);

  return (
    <div data-aos="fade-in" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-6 md:mx-10 lg:mx-16 mb-6 gap-y-6 gap-x-4">
      {allProducts.length > 0 ? (
        allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p> // Fallback message when no products are found
      )}
    </div>
  );
};

export default ProductList;
