import React from 'react';
import "../styles/header.css"
import image from "../assets/image.svg"
import photo from "../assets/photo.svg"
import icon from "../assets/icon-header.svg"

const Header = () => {
    return ( <>
        <div className="header">
            <div className='container-text'>
                <div className="news">
                    <p>News</p>
                </div>
                <div className="text">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suspendisse ullamcorper egestas augue, in fringilla ipsum condimentum at.</p>
                </div>
                 <div className="photo">
                <img src= {image} alt="image" />
                </div>          
                <div className="learn">
                    <p>Learn from best <span>instructors</span> around the globe</p>
                    <img src={photo} alt="" />
                </div>
                <div className="stat">
                    <img src={icon} alt="icon" />
                    <p className='quantite'>15K</p>
                    <p className='text-stat'>Amazing students around the globe</p>
                </div>
            </div>
        </div>
    </> );
}
 
export default Header;