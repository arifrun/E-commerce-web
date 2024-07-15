import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title, path}) => {
  return ( 
    <Link className=' text-white font-primary text-bold bg-brand font-bold py-6 px-[72px] inline-block' to= {path}>{title}</Link>
  )
}

export default Button 