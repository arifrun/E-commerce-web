import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
const Filter = () => {
  return (
      <section className="py-9 bg-[#F9F1E7]"> 
         <div className="container flex justify-between"> 
            <div className="flex"> 
                <p className=" font-primary font-normal  text-xl flex items-center gap-3 text-black pr-8">
                <HiAdjustmentsHorizontal />  
                 <span>Filter</span>
                </p> 
                 <p className="font-primary font-normal text-xl flex items-center text-black pl-8 border-l-2 border-l-secodary"> 
                    Showing 1–16 of 32 results 
                    </p>
            </div>  
             <div className="flex items-center gap-8"> 
                <label className="font-primary font-normal text-xl text-black pr-4">
                    Show 
                </label> 
                <input type="number" value="16" className=" py-3 w-14 text-center"/> 
                <div> 
                <label className="font-primary font-normal text-black pr-4"> 
                    Short by
                </label> 
                <select className="py-3 px-4"> 
                    <option value="default">Default</option>
                </select>
              </div>
             </div>   
         </div>
      </section>
  )
}

export default Filter