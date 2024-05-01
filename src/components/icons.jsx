import React from 'react';
import { FaInstagram, FaFacebook, FaGoogle, FaEnvelope, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='contact-icons'>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={32} />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={32} />
      </a>
      <a href="mailto:example@example.com">
        <FaEnvelope size={32} />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} />
      </a>
      <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
        <FaTelegram size={32} />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FaGithub size={32} />
      </a>
    </div>
  );
};

export default SocialIcons;
