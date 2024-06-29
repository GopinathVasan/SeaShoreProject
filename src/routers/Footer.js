import "../css/FooterStyles.css";
import { Link } from "react-scroll";
import logo from "../assert/logo.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
        <ul className="footer-list">
          <li className='footer-item'>
            <Link to="home" spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} className='footer-links'>
              Home
            </Link>
          </li>
          <li
            className='footer-item'>
            <Link to="service"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
              className='footer-links'
            
            >
              Service
            </Link>
          </li>
          <li className='footer-item'>
            <Link to="about"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
              className='footer-links'
            
            >
              About
            </Link>
          </li>
          <li className='footer-item'>
            <Link to="contact"
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
              className='footer-links'
            
            >
              Contact
            </Link>
          </li>
        </ul>
        </div>
        <div className="title">
        <img src={logo} alt="logo" width="60" height="60"/>
        <h1 className='footer-title'>SUNRISE</h1>
             <h3>Marine Services and Trading</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
