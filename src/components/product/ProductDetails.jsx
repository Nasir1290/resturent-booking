import React from 'react'
import ProductCard from './ProductCard'

const ProductDetails = ({title}) => {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-16 mb-6 gap-y-6 gap-x-4'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default ProductDetails
