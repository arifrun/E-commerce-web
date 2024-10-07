import React from "react"; 
import Cartitems from "./Cartitems";
import CardButton from "../CardButton";

const CartBody = () => {
  return (
    <section className="py-16">
      <div className="container flex gap-8">  
        <table className="w-9/12"> 
          <thead>
            <tr>
              <th className="bg-third py-4 font-primary font-medium text-base">Product</th>
              <th className="bg-third py-4 font-primary font-medium text-base">Price</th> 
              <th className="bg-third py-4 font-primary font-medium text-base">Quantity</th> 
              <th className="bg-third py-4 font-primary font-medium text-base">Subtotal</th>  
            </tr>
          </thead>
          <tbody>
            <Cartitems/>  
            <Cartitems/>  
            <Cartitems/>  
          </tbody> 
        </table>   
        <div className="w-3/12 px-16 pt-4 pb-12 bg-third text-center h-fit"> 
           <h3 className="font-primary font-semibold text-3xl mb-16">Cart Totals</h3>  
           <div className=" flex justify-between"> 
            <p className=" font-primary font-medium text-base">Subtotal</p>  
            <p className=" font-primary font-medium text-base text-secodary">Rs. 250,000.00</p>
           </div>  
           <div className=" flex justify-between pt-8 pb-10"> 
             <p className="font-primary font-medium text-base">Total</p> 
             <p className=" font-primary font-medium text-lg text-brand">Rs. 250,000.00</p>
           </div>   
            <CardButton path="/Chec-kOut" title="Check Out"/>
        </div> 
      </div>
    </section>
  );
};

export default CartBody;
