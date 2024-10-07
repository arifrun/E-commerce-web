import React from "react";
import { IoMdClose } from "react-icons/io";
import SidebarItem from "./SidebarItem";
import CardButton from "./CardButton";

const Card = ({ handelSidebar }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-full bg-[rgba(0,0,0,0.20)] z-50">
      <div className="w-fit py-7 bg-white ml-auto h-[746px]">
        <div className="flex items-center justify-between pb-6 mb-10 border-b px-6">
          <h2 className="font-primary font-semibold text-2xl text-black">
            Shopping Cart
          </h2>
          <IoMdClose
            onClick={() => handelSidebar(false)}
            className=" text-secodary text-2xl cursor-pointer" 
          />
        </div>
        <div className="sideCard h-[480px] overflow-y-scroll px-6">
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
        </div>
        <div className="flex items-center justify-between pb-6 border-b px-6">
          <p className="font-primary font-normal text-base text-black">
            Subtotal
          </p>
          <p className="font-primary font-semibold text-base text-brand">
            Rs. 520,000.00
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-6 px-6">
          <CardButton path="cart" title="Cart" />
          <CardButton path="cart" title="Checkout" />
        </div>
      </div>
    </div>
  );
};

export default Card;
