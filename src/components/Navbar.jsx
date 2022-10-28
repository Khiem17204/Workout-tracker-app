import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
  <nav className='main-nav'>
    <NavLink to='/home' activeClassName='active-style'>
        Home
    </NavLink>
    <NavLink to='/create-exercise' activeClassName='active-style'>
        Add Exercise
    </NavLink>
  </nav>
  )
}

export default NavBar;