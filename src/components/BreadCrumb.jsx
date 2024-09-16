import React from 'react'
import { Link, useLoaderData, useLocation } from 'react-router-dom' 
import { FaChevronRight } from "react-icons/fa";

const BreadCrumb = () => {
    const location = useLocation();  
    const path = location.pathname.split("/")[1]
  return (
    <ul className="flex items-center justify-center gap-1 mt-1"> 
        <li> 
            <Link to="/" className=" font-primary text-base text-black font-medium"> 
            Home
            </Link>
        </li>  
        <li> 
        <FaChevronRight /> 
        </li>
        <li> 
            <p to="/" className=" font-primary text-base font-light text-black capitalize">{path}</p>
        </li>
    </ul>
  )
}

export default BreadCrumb