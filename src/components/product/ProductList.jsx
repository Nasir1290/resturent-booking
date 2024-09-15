// // import React from "react";
// // import ProductCard from "./ProductCard";

// // const ProductList = ({ products }) => {
// //   return (
// //     <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-16 mb-6 gap-y-6 gap-x-4">
// //       {products.map((product) => (
// //         <ProductCard key={product.id} product={product}/>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ProductList;

// import React from "react";
// import ProductCard from "./ProductCard";

// const ProductList = ({ selectedCategory, products }) => {
//   let allProducts=[]
//   if (selectedCategory) {
//     if (selectedCategory.toLowerCase() === "all") {
//       allProducts = [...products];
//     } else {
//       allProducts = products?.filter(
//         (product) =>
//           product?.category?.toLowerCase() === selectedCategory?.toLowerCase()
//       );
//     }
//   }

//   console.log({ selectedCategory }, { allProducts });
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-6 md:mx-10 lg:mx-16 mb-6 gap-y-6 gap-x-4">
//       {allProducts
//         ? allProducts
//         : products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//     </div>
//   );
// };

// export default ProductList;



import React from "react";
import ProductCard from "./ProductCard";

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-6 md:mx-10 lg:mx-16 mb-6 gap-y-6 gap-x-4">
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
