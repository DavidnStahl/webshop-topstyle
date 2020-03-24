import React,{useContext,useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import {useHistory} from 'react-router'
import {LoginContext} from '../Context/LoginContext';

const Nav = () =>{
    const [IsInLogged, setInLogged,CheckLogin,Login,setLogin,IsLoginSucced, setLoginSucced] = useContext(LoginContext)
   let history = useHistory();
    useEffect (() =>{
        checkResult();
        
    },[Login,setLogin])
    
    const checkResult = () =>{
        if(Login === "Logout"){
            history.push('/Logout');
        } 
    }
  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink to='/' className="nav-link">Home</NavLink></li>
          <li id="Search" className="nav-item" ><NavLink to='/Search' className="nav-link">Search Products</NavLink></li>
      </ul>
      <ul className="navbar-nav">
      <li id="CustomerBasket" className="nav-item" ><NavLink to='/CustomerBasket' className="nav-link">CustomerBasket</NavLink></li>
      <li className="nav-item"><NavLink to={Login} className="nav-link">{Login}</NavLink></li>
          <li id="Register" className="nav-item"><NavLink to='/Register' className="nav-link">Register</NavLink></li>
      </ul>
  </nav>   
  )
}

export default Nav