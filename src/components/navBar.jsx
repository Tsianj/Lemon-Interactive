import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import search from '../assets/bx_search.svg';
import "../styles/navbar.css"

const Navbar = () => {

  return (
    <>
      <div className= "nav">

        <div className='logo'>
          <Link to="/" className='link-nav'>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className='liste-nav'>
            <li>
                <Link to="/" className='link-nav'>Home</Link>
            </li>
            <li>
                <Link to="/courses" className='link-nav'>Courses</Link>
            </li>
            <li>
                <Link to="/instructors" className='link-nav'>Instructors</Link>
            </li>
            <li>
                <Link to="/contact" className='link-nav'>Contact</Link>
            </li>
        </ul>
        <button className="nav-burger">
          <span className="burger-bar"></span>
        </button>
        <div className='link-conn'>
            <img src={search} alt="rechercher" />
        <div className='btn-log'>
            <Link to="/q-login" className='btn-log'>Login</Link>
        </div>
        <div>
            <Link to="/register" className='btn-reg'>Register</Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;