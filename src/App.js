import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 
import Nav from './Components/Nav'
import Main from './Components/Main'


const App = () =>{
  return (
    <div >
      <Nav />
      <div className="container text-center">
      <Main />
      </div>
    </div>
  )
}

export default App
