import React, {createContext,useState} from 'react';

export const SearchContext = createContext();


const SearchContextProvider = (props) => {
    const [Products , setProducts] = useState("hej");
    
        return (
            <SearchContext.Provider value={[Products,setProducts]}>
              {props.children}
            </SearchContext.Provider>
        )
    
}

export default SearchContextProvider



