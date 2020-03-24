import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 
import Nav from './Components/Nav'
import Main from './Components/Main'
import SearchContextProvider from './Context/SearchContext'
import ProductContextProvider from './Context/ProductContext'


const App = () =>{
  return (
    <div >
    <SearchContextProvider>
    <ProductContextProvider>
      <Nav />
      <div className="container text-center">
      <Main />
      </div>
      </ProductContextProvider>
      </SearchContextProvider>
    </div>
  )
}

export default App
