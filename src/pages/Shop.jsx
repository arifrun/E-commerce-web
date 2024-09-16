import React from 'react'
import Banner from '../components/Shop/Banner'
import Filter from '../components/Shop/Filter';  
import ShopProduct from '../components/Shop/ShopProduct';

const Shop = () => {
  return ( 
    <> 
    <Banner/>     
    <Filter/>   
     <ShopProduct itemsPerPage={16} />
   </>
  );
}

export default Shop