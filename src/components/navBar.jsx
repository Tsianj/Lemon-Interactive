import React from 'react';
import logo from '../assets/logo.svg';
import search from '../assets/bx_search.svg';

const navBar = () => {
    return ( <>
        <div className='nav'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='link-nav'>
                <div className='btn-nav'>Home</div>
                <div className='btn-nav'>Courses</div>
                <div className='btn-nav'>Instructors</div>
                <div className='btn-nav'>Contact</div>
            </div>
            <div className='link-conn'>
                <img src={search} alt="rechercher" />
                <div className='btn-log'>Login</div>
                <div className='btn-reg'>Register</div>
            </div>
        </div>
    </> );
}
 
export default navBar;