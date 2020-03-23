import React from 'react'
import ProductItems from './ProductItems'
import SearchContextProvider from '../Context/SearchContext'


const Products = () => {
    return (       
           <SearchContextProvider>
               <ProductItems/>
            </SearchContextProvider>
    )
}

export default Products
