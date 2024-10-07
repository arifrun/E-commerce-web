import React from "react";
import { MdDeleteOutline } from "react-icons/md";
const Cartitems = () => {  
  return (
    <tr>
      <td className="pt-5">
        <div className="flex items-center gap-9">
          <div className=" w-28 rounded-xl overflow-hidden">
            <img src="/product4.png" className="w-full" alt="product" />
          </div>
          <p className=" font-primary font-normal text-base text-secodary">
            Asgaard sofa
          </p>
        </div>
      </td>
      <td className=" font-primary font-normal text-base text-secodary text-center pt-5">
        Rs. 250,000.00 
      </td>
      <td className="pt-5">
        <p className="w-8 h-8 border flex justify-center items-center m-auto pb-5">
          1
        </p>
      </td>
      <td className="pt-5">
        <div className=" flex gap-12 justify-center">
          <p>Rs. 250,000.00</p>
          <button>
            <MdDeleteOutline className=" text-2xl text-brand" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Cartitems;
