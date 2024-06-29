import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../css/ContactStyle.css";
import { Link } from "react-scroll";
function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone:  '',
      message: '',
    });
  
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const serviceID = 'service_tcokxzi';
      const templateID = 'template_e5sndff';
      const userID = '1UudTJvk7G3xUjuX9';
  
      emailjs.sendForm(serviceID, templateID, e.target, userID)
        .then((result) => {
          setResponseMessage(`Thank you, ${formData.name}! Your message has been sent successfully!`);
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, (error) => {
          alert('Failed to send the message. Please try again later.');
        });
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
            required
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Phone Number:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
        </div>
        <div className='location'>
<div className='location-details'>
    <h3>Working Hours</h3>
    <div className='details'><i class="fa-solid fa-business-time"></i>
    <p>Sunday - Thursday , 7:00 AM - 5:00 PM</p>
    </div>
    <h3>Contact</h3>
    <p>Your feedback is important to SUNRISE. Share with us your comments, compliments and feedback to help us improve our services.</p>
    <div className='details'><i class="fa-solid fa-location-dot"></i>
    <p>SUNRISE Marine Service And Trading</p>
    </div>
    <div className='details'><i class="fa-solid fa-phone"></i>
    <p><a href="tel:+974 5043 4080">+974 5043 4080</a> , <a href="tel:+974 7741 5043">+974 7741 5043</a> , <a href="tel:+97444357031">+97444357031</a></p>
    </div>
    <div className='details'><i class="fa-regular fa-envelope"></i>
    <p><a href='mailto:sunrisemarineco@gmail.com'>sunrisemarineco@gmail.com</a></p>
    </div>
    <div className='details'><i class="fa-solid fa-globe"></i>
    <p><a>https://sunrise.in</a></p>
    </div>
</div>
<div className='location-map'>
<h1>Location</h1>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14420.322932106297!2d51.551583!3d25.3686106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c3735e20a749%3A0x1bae64b11c052d86!2sThe%20Pearl%20Island!5e0!3m2!1sen!2sin!4v1719652477647!5m2!1sen!2sin"  title='location' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
        </div>
    </div>
      
    );
};
export default Contact;