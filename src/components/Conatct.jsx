

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoMdMail } from "react-icons/io";
import SocialIcons from './icons';
import '../App.css';

const Conatct = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rn5flts', 'template_0jh3ue2', form.current, {
        publicKey: 'NJkq0ih1eXl2MnBvc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent Successfully :)');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <svg className='contactSvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#071f47" fill-opacity="1" d="M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,176C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    <div className='contactSection' id="contact">
        <div className='leftContact'>
          <div className='leftInner'>
            
            <SocialIcons/>
          </div>
        </div>
        <div className='rightContact'>
          <div className='rightUpper'>
                <h1>Send Me Your Details</h1>
          </div>
          <div className='rightLower'>
            <form ref={form} onSubmit={sendEmail}>
              {/* <label>Name</label> */}
              <input style={{color:"black"}} type="text" name="user_name" placeholder='Full Name'/>
              {/* <label>Email</label> */}
              <input style={{color:"black"}} type="email" name="user_email" placeholder='Your Email'/>
              {/* <label>Message</label> */}
              <textarea style={{color:"black"}} name="message" placeholder='Your Message'/>
              <input className='submitBtn' type="submit" value="Send" />
            </form>
          </div>
          
        </div>
      
    </div>
    </>
  );

  
};

export default Conatct;