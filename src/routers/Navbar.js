import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from "../assert/logo.jpg";
import "../css/NavbarStyles.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY>=700){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  return (
    <>
      <nav className={color ? 'NavbarItems NavbarItems-bg2': 'NavbarItems NavbarItems-bg'}>
      <div className='nav-div'>
      <img src={logo} alt="logo" width="80" height="80"/>
             <h1 className='nav-title'>SUNRISE MARINE</h1>
             </div>
        <div className='menu-icons' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="home1" spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'>
            <Link to="service"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Service
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="about"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="contact"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;