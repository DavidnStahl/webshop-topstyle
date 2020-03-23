import React from 'react'
import SearchForProducts from './SearchForProduct'
import SearchContextProvider from '../Context/SearchContext'

const Register = () => {
    return (
    <SearchContextProvider>
    <SearchForProducts/>
    </SearchContextProvider>)
}

export default Register