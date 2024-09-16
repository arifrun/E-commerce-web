import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const SidebarItem = () => {
  return (
    <div className="flex items-center pb-20">
      <div className="w-24 rounded-xl overflow-hidden">
        <img src="product7.png" className="w-full" alt="product" />
      </div>
      <div className="ml-8 mr-14">
        <h3 className="font-primary font-normal text-base text-black pb-3">
          Asgaard sofa
        </h3>
        <p className="font-primary font-light text-base">1 X <span className="text-brand font-medium">Rs. 250,000.00</span></p>
      </div>
      <IoIosCloseCircle  className="text-secodary text-xl cursor-pointer"/>
    </div>
  );
};
export default SidebarItem;
