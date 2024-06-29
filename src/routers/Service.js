import React, { useEffect, useState } from 'react';
import "../css/ServiceStyles.css";
import service1 from "../assert/service1.webp";
import service2 from "../assert/service2.webp";
import service3 from "../assert/service3.webp";
import service4 from "../assert/service4.webp";
import { Link } from "react-scroll";
import ad1 from "../assert/service-1.webp";
import ad2 from "../assert/service-2.jpg";
import ad3 from "../assert/service-3.jpg";
import ad4 from "../assert/service-4.jpg";
import ad5 from "../assert/service-5.jpg";
import ad6 from "../assert/service-6.jpg";

const Service = ({ interval = 3000 }) => {

  const contents = [
    <div>
      <h2>Underwater Works:</h2>
      <p>Proficient in a range of underwater services using the latest technology and sub-sea equipment.</p>
    </div>,
    <div>
      <h2>Construction and Maintenance of Jetties:</h2>
      <p>Expertly constructing and maintaining jetties to ensure durability and functionality.</p>
    </div>,
    <div>
      <h2>Beach Construction:</h2>
      <p>Creating and maintaining beaches with attention to environmental and aesthetic considerations.</p>
    </div>,
    <div>
    <h2>Construction of Breakwaters and Groins:</h2>
    <p>Building structures to protect coastlines and manage water flow.</p>
  </div>,
  <div>
  <h2>Sheet Piling Works:</h2>
  <p>Executing sheet piling projects for shoreline stabilization and other marine applications. </p>
</div>,
<div>
      <h2>Installation and Maintenance of Marinas and Floating Pontoons:</h2>
      <p>Providing comprehensive services for marina development and upkeep.</p>
    </div>
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, interval);

    return () => clearInterval(timer);
  }, [contents.length, interval]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contents.length) % contents.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  return (
    <div className="mydiv" id="service">
      <div>
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          <img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9ElEQVR4nO2TPwrCMBTGXxxr3R0dCoUXeEsP0CkRpHglL+HmYRyK53DoQRSigg02vDZJO5gfZAr0+5N+AImED1jn5iwCqbVAdRWoblAeN8uIS/0wZ1YTWOdC6vYt3JnzMtLGfw76So6qA9QFlPudkOoevwn6If4huglyiEc3gf0374nbM0RdhP0nyJF8aIbBmiCG+NAMvU2gu3bWDCc/BzGTc2Y4uomqybjJ+3eOtPZd1WQuC0JIfWYlt+E0gfoCcFq5WwAQgIctK7mNswnzTQGjIEZym1lmGN0EeYh7m6AA4lFmOJUgM/TFa4ahmDTDROIfeAJfaOqz+K2UMgAAAABJRU5ErkJggg==" alt="/" />
        </Link>
        <h1 className="myh1">Comprehensive Service</h1>
        <hr />
        <p className="service-p">From strategy to execution, our winning combination of innovative thinking,
          scientific design, sophisticated development, and ongoing ensure we're delivering value to help you grow.
        </p>
      </div>
      <h1>Fields of Expertise:</h1>
      <div className="slideshow">
        <button className="nav prev" onClick={prevSlide}>❮</button>
        <button className="nav next" onClick={nextSlide}>❯</button>
        {contents.map((content, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            {content}
          </div>
        ))}
      </div>

      <h3 className='myh1'>Additional service</h3>
      <div className='ad-service-1'>
        <div className='ad-img-1'><img alt='/' src={ad1} /></div>
        <div className='ad-content'>
          <h2>Infrastructure Project</h2>
          <p>Sunrise Marine is renowned for its specialization in infrastructure development, particularly in road project execution. Our mission is to seize the vast potential in infrastructure development projects, establishing ourselves as a prominent name in this field.</p>
        </div>
      </div>
      <div className='ad-service-2'>
        <div className='ad-img-1'><img alt='/' src={ad2} /></div>
        <div className='ad-content'>
          <h2>Diving Works</h2>
          <p>We utilize the latest underwater marine technology and sub-sea equipment to deliver specialized diving services. Our dynamic and skilled teams ensure competitive, cost-effective, and successful outcomes for a broad range of underwater services, including:
            <li>Underwater construction Inspection survey and sampling</li>
            <li>Underwater video and photography Construction divers</li>
            <li>Commercial divers</li></p>
        </div>
      </div>
      <div className='ad-service-3'>
        <div className='ad-img-1'><img alt='/' src={ad3} /></div>
        <div className='ad-content'>
          <h2>Vessel Chartering & Brokering Services</h2>
          <p>Understanding the critical role of crew boats, speed boats, and tug & barge chartering in offshore or civil marine construction projects, Sunrise Marine has developed a comprehensive network of reliable partners and barge owners. We work diligently to match the requirements and needs of our clients, ensuring appropriate marine solutions for their projects.</p>
        </div>
      </div>
      <div className='ad-service-4'>
        <div className='ad-img-1'><img alt='/' src={ad4} /></div>
        <div className='ad-content'>
          <h2>Manpower Supply</h2>
          <p>Sunrise Marine assures reliable manpower supply for all marine sectors, including captains, engineers, seamen, divers, and laborers. Our goal is to provide quality manpower services to our clients, offering professional, skilled, and unskilled personnel from over 16 countries.</p>
        </div>
      </div>
      <div className='ad-service-5'>
        <div className='ad-img-1'><img alt='/' src={ad5} /></div>
        <div className='ad-content'>
          <h2>Silt Curtain Supplier</h2>
          <p>With a strong contracting background, we understand on-site requirements and perform rigorous calculations to ensure our Silt Curtains meet and exceed performance specifications. Manufactured in the USA, Turkey, and China, our Silt Curtains are designed to suit various marine conditions, acting as barriers to reduce sand and debris migration while allowing water to pass through. They are ideal for dredging, marine construction, environmental protection, and more. Our curtains are customizable to meet unique challenges and requirements.</p>
        </div>
      </div>
      <div className='ad-service-6'>
        <div className='ad-img-1'><img alt='/' src={ad6} /></div>
        <div className='ad-content'>
          <h2>Ship Maintenance</h2>
          <p>Sunrise Marine offers a wide range of ship maintenance services, including repair, conversion, and refurbishment of all types of ships. Our services also encompass:
            <li>Deck and Superstructure Maintenance</li>
            <li>Interior Maintenance</li>
            <li>Antifouling</li>
            <li>Propeller and Shaft Work.</li></p>
        </div>
      </div>
    </div>
  );
}
export default Service;
