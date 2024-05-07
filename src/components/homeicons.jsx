import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa';

const HomeIcons = () => {
  return (
    <div className='contact-icons'>
      <a href="https://www.instagram.com/akash.thakur09__/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={32} style={{ color: 'black' }} />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={32} style={{ color: 'black' }} />
      </a>
      <a href="https://www.linkedin.com/in/thakur-aakash" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} style={{ color: 'black' }} />
      </a>
      <a href="https://t.me/a_akash_thakur" target="_blank" rel="noopener noreferrer">
        <FaTelegram size={32} style={{ color: 'black' }} />
      </a>
    </div>
  );
};

export default HomeIcons;
