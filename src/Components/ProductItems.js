import React, {useContext,memo} from 'react'
import { SearchContext } from '../Context/SearchContext'

const ProductItems = () => {
   const [Products] = useContext(SearchContext);
    
    return (
        <div>
            <h2>{Products}</h2>
        </div>
    )
}

export default ProductItems
