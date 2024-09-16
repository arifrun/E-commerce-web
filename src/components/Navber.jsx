import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import { FaRegUser, FaRegHeart} from "react-icons/fa"; 
import { IoSearch} from "react-icons/io5";  
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { FaBars } from "react-icons/fa";
import Card from './CardFolder/Card';
 
const Navber = () => {  
    const[show, setShow] = useState(true);  
    const[sideCard, setShowsideCard] = useState(false); 

    const handelSidebar =(result) => { 
        setShowsideCard(result);
    }
  return (
     <> 
     <nav className=' py-7 relative'> 
        <div className='container flex justify-between items-cCenter'> 
            <div> 
                <img src="/logo.png" alt="logo" /> 
            </div> 
            <ul className={`w-1/2 ${show ? "translate-x-0" : "-translate-x-full"} flex flex-col lg:flex-row -translate-x-full lg:w-auto items-center gap-[75px] font-primary text-lg font-medium text-black absolute top-full left-0 bg-white h-screen lg:h-auto lg:static transition-all`}> 
                <li> 
                    <Link to="/">Home</Link>  
                </li> 
                <li> 
                    <Link to="/shop">Shop</Link>
                </li>   
                <li> 
                    <Link to="/">About</Link>
                </li> 
                <li> 
                    <Link to="/">Cntacct</Link>
                </li>
            </ul>  
         <div> 
            <ul className='flex items-center gap-11 text-2xl'> 
            <li> 
                <Link>  
                <FaRegUser />
                </Link>
            </li> 
            <li> 
                <Link> 
                  <IoSearch /> 
                </Link>
            </li> 
            <li> 
                <Link> 
                   <FaRegHeart/>  
                </Link>
            </li>  
            <li onClick={() =>setShowsideCard(true)}>  
                <AiOutlineShoppingCart className="cursor-pointer"/>  
            </li> 
            </ul>
         </div>  
          <button className=' block lg:hidden' onClick={() => setShow(!show)}> 
          <FaBars className='text-2xl'/>
          </button>
        </div>
     </nav>   
     { sideCard && <Card handelSidebar ={handelSidebar}/>}
     </>
  )
}

export default Navber