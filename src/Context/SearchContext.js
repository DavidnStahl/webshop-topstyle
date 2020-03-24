import React, {createContext,useState} from 'react';

export const SearchContext = createContext();


const SearchContextProvider = (props) => {
    const [Products , setProducts] = useState([]);
        return (
            <SearchContext.Provider value={[Products,setProducts]}>
              {props.children}
            </SearchContext.Provider>
        )
    
}

export default SearchContextProvider



