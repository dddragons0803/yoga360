import React from 'react';
import './contact.css';
import Navbar from '../Navbar';

const Contact = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='data'>
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p><b>Phone:</b> 082539 00009</p>
          <p><b>Email:</b> yogalive360degree@gmail.com</p>
          <p><b>YouTube Channel:</b> <a href="https://youtube.com/channel/UC8UzusZmA81HEBYRwybQzbg" target="_blank" rel="noopener noreferrer">YogaLive360</a></p>
          <p><b>Facebook Page:</b> <a href="https://www.facebook.com/yogalive360/" target="_blank" rel="noopener noreferrer">YogaLive360</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
