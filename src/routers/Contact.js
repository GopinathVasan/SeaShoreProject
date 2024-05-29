import React, { useState } from 'react';
import "../css/ContactStyle.css";
import { Link } from "react-scroll";
function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission (e.g., send data to an API)
      console.log('Form data submitted:', formData);
    };
  
    return (<div className='contact-container' id="contact">
        <Link to="home" spy={true} smooth={true} 
               offset={50} 
               duration={500}><img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9ElEQVR4nO2TPwrCMBTGXxxr3R0dCoUXeEsP0CkRpHglL+HmYRyK53DoQRSigg02vDZJO5gfZAr0+5N+AImED1jn5iwCqbVAdRWoblAeN8uIS/0wZ1YTWOdC6vYt3JnzMtLGfw76So6qA9QFlPudkOoevwn6If4huglyiEc3gf0374nbM0RdhP0nyJF8aIbBmiCG+NAMvU2gu3bWDCc/BzGTc2Y4uomqybjJ+3eOtPZd1WQuC0JIfWYlt+E0gfoCcFq5WwAQgIctK7mNswnzTQGjIEZym1lmGN0EeYh7m6AA4lFmOJUgM/TFa4ahmDTDROIfeAJfaOqz+K2UMgAAAABJRU5ErkJggg==" alt="/"/></Link>
        <h1 className='contact-h1'>CONTACT</h1>
        <div className='interact'>
            <h1 className='interact-h1'>Contact a Business Expert Personnel</h1>
        <form className="form" onSubmit={handleSubmit}>
            <h3>Please provide your contact details and our team will get back to you.</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
        </div>
        <div className='location'>
<div className='location-details'>
    <h3>Working Hours</h3>
    <div className='details'><i class="fa-solid fa-business-time"></i>
    <p>Sunday - Thursday , 7:00 AM - 5:00 PM</p>
    </div>
    <h3>Contact</h3>
    <p>Your feedback is important to Seaworks. Share with us your comments, compliments and feedback to help us improve our services.</p>
    <div className='details'><i class="fa-solid fa-location-dot"></i>
    <p>SUN RISE Marine Service And Trading</p>
    </div>
    <div className='details'><i class="fa-solid fa-phone"></i>
    <p>+91 XXXXX XXXXX</p>
    </div>
    <div className='details'><i class="fa-regular fa-envelope"></i>
    <p>XXXXX123@gmail.com</p>
    </div>
    <div className='details'><i class="fa-solid fa-globe"></i>
    <p><a>https://sunrise.in</a></p>
    </div>
</div>
<div className='loaction-map'>
<h1>Location</h1>
</div>
        </div>
    </div>
      
    );
};
export default Contact;