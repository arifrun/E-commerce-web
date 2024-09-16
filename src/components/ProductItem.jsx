import React from 'react'

const ProductItem = () => {
  return (
    <div className="relative group">
    <img src="/product.png" className=" w-full" alt="product" />
    <div className="bg-[#F4F5F7] px-5 pt-4 pb-7">
      <h3 className=" font-primary text-primary text-2xl font-semibold">
        Syltherine
      </h3>
      <p className=" text-secodary font-primary font-semibold text-base py-2">
        Stylish cafe chair
      </p>
      <div className="flex justify-between">
        <p className=" text-primary font-primary font-medium text-xl"> 
          Rp 2.500.000
        </p>
        <p className=" font-primary text-base font-medium text-secodary line-through"> 
          Rp 3.500.000
        </p>
      </div>
    </div>
    <div
      className=" absolute top-0 left-0 w-full h-full bg-[rgba(58,58,58,0.32)] scale-0 group-hover:scale-100 transition-all
    flex justify-center items-center"
    >
      <button className=" text-brand text-base font-primary font-bold py-3 px-[52px] bg-white inline-block">
        Add to cart
      </button>
    </div>
  </div>   
  )
}

export default ProductItem