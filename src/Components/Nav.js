import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = () =>{
  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink to='/' className="nav-link">Home</NavLink></li>
          <li className="nav-item"><NavLink to='/Search' className="nav-link">Search Products</NavLink></li>
      </ul>
      <ul className="navbar-nav">
      <li className="nav-item"><NavLink to='/CustomerBasket' className="nav-link">CustomerBasket</NavLink></li>
          <li className="nav-item"><NavLink to='/Login' className="nav-link">Login</NavLink></li>
          <li className="nav-item"><NavLink to='/Register' className="nav-link">Register</NavLink></li>
      </ul>
  </nav>   
  )
}

export default Nav