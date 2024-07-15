import React from 'react'
import { Link } from 'react-router-dom' 
import { FaRegUser, FaRegHeart} from "react-icons/fa"; 
import { IoSearch} from "react-icons/io5";  
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navber = () => {
  return (
     <nav className=' py-7'> 
        <div className='container flex justify-between items-center'> 
            <div> 
                <img src="/logo.png" alt="logo" /> 
            </div> 
            <ul className='flex items-center gap-[75px] font-primary text-lg font-medium text-black'> 
                <li> 
                    <Link to="/">Home</Link>  
                </li> 
                <li> 
                    <Link to="/">Shop</Link>
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
            <li> 
                <Link>  
                <AiOutlineShoppingCart />
                </Link>
            </li>
            </ul>
         </div>
        </div>
     </nav>
  )
}

export default Navber