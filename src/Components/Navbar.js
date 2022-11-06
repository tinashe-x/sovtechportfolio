import React from 'react';
import './css/navbar.css';

const Navbar = () =>{
    return(
        <div className='navbar'>
            <a href='/' className='logo'>SovTech Grad Program</a>
            <ul>
                <li className="active"><a href='#banner'>Home</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#about'>Who Am I?</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#contactform'>Contact Me</a></li>
            </ul>
        </div>
    );
} 

export default Navbar;