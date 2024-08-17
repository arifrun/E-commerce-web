import React from "react";
import { Link } from "react-router-dom";
const OurProduct = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <h2 className="title text-center">Our Products</h2>
        <div className=" grid grid-cols-4 gap-8 pt-8 ">
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

          <div className="relative group">   
      <img src="/product2.png" className=" w-full" alt="product" />  
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-7">
        <h3 className=" font-primary text-primary text-2xl font-semibold">
          Leviosa
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
      <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(58,58,58,0.32)] scale-0 group-hover:scale-100 transition-all
         flex justify-center items-center">
         <button className=" text-brand text-base font-primary font-bold py-3 px-[52px] bg-white inline-block">
          Add to cart
        </button>
      </div>     
    </div>        
    <div className="relative group">   
      <img src="/product3.png" className=" w-full" alt="product" />  
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-7">
        <h3 className=" font-primary text-primary text-2xl font-semibold">
        Lolito
        </h3>
        <p className=" text-secodary font-primary font-semibold text-base py-2">
          Luxury big sofa
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
      <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(58,58,58,0.32)] scale-0 group-hover:scale-100 transition-all
         flex justify-center items-center">
         <button className=" text-brand text-base font-primary font-bold py-3 px-[52px] bg-white inline-block">
          Add to cart
        </button>
      </div>     
    </div>        
    <div className="relative group">   
      <img src="/product4.png" className=" w-full" alt="product" />  
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-7">
        <h3 className=" font-primary text-primary text-2xl font-semibold">
        Respira
        </h3>
        <p className=" text-secodary font-primary font-semibold text-base py-2">
        Outdoor bar table and stool
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
      <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(58,58,58,0.32)] scale-0 group-hover:scale-100 transition-all
         flex justify-center items-center">
         <button className=" text-brand text-base font-primary font-bold py-3 px-[52px] bg-white inline-block">
          Add to cart
        </button>
      </div>     
    </div>        
    <div className="relative group">   
      <img src="/product4.png" className=" w-full" alt="product" />  
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-7">
        <h3 className=" font-primary text-primary text-2xl font-semibold">
        Grifo
        </h3>
        <p className=" text-secodary font-primary font-semibold text-base py-2">
        Night lamp
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
      <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(58,58,58,0.32)] scale-0 group-hover:scale-100 transition-all
         flex justify-center items-center">
         <button className=" text-brand text-base font-primary font-bold py-3 px-[52px] bg-white inline-block">
          Add to cart
        </button>
      </div>     
    </div>       
    <div className="relative group">   
      <img src="/product5.png" className=" w-full" alt="product" />  
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-7">
        <h3 className=" font-primary text-primary text-2xl font-semibold">
        Muggo
        </h3>
        <p className=" text-secodary font-primary font-semibold text-base py-2">
        Small mug
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
      <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(58,58,58,0.32)] scale-0 group-hover:scale-100 transition-all
         flex justify-center items-center">
         <button className=" text-brand text-base font-primary font-bold py-3 px-[52px] bg-white inline-block">
          Add to cart
        </button>
      </div>     
    </div>       
    <div className="relative group">   
      <img src="/product7.png" className=" w-full" alt="product" />  
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-7">
        <h3 className=" font-primary text-primary text-2xl font-semibold">
        Pingky
        </h3>
        <p className=" text-secodary font-primary font-semibold text-base py-2">
        Cute bed set
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
      <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(58,58,58,0.32)] scale-0 group-hover:scale-100 transition-all
         flex justify-center items-center">
         <button className=" text-brand text-base font-primary font-bold py-3 px-[52px] bg-white inline-block">
          Add to cart
        </button>
      </div>     
    </div>       
    <div className="relative group">   
      <img src="/product8.png" className=" w-full" alt="product" />  
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-7">
        <h3 className=" font-primary text-primary text-2xl font-semibold">
        Potty
        </h3>
        <p className=" text-secodary font-primary font-semibold text-base py-2">
        Minimalist flower pot
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
      <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(58,58,58,0.32)] scale-0 group-hover:scale-100 transition-all
         flex justify-center items-center">
         <button className=" text-brand text-base font-primary font-bold py-3 px-[52px] bg-white inline-block">
          Add to cart
        </button>
      </div>     
    </div>       
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/shop"
            className=" text-brand text-base font-primary font-bold py-3 px-[78px] inline-block border-2 border-brand"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
};
export default OurProduct;
