import React from 'react';
import './contact.css';
// import {MdOutlineEmail} from 'react-icons/md'
// import {RiMessengerLine} from 'react-icons/ri'
// import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
// import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_5lpa1ox', 'template_7saf51a', this); // form.current);  // , 'user_641J0AWGxx4qcKi835yDq')

  //   e.target.reset();
  // };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <h3>Thank you for checking out my portfolio site!</h3>
      <h3>You can reach me at <b className="email_address">ericksoneaton7@gmail.com</b></h3>

      <div className='contact__socials'>
        <a href="https://www.linkedin.com/in/erickeaton7/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/erickeaton7" target="_blank"><FaGithub/></a>
      </div>

      {/* <div className="container contact__container">
        <div className="contact__options">
          {/* <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ericksoneaton7@gmail.com</h5>
            <a href="mailto:ericksoneaton7@gmail.com" target="_blank">Send a message</a>
          </article> */}
          {/* <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/ernest.achiever" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+1234567890" target="_blank">Send a message</a>
          </article> */}
        {/* </div> */}
        {/* END OF CONTACT OPTIONS */}
        {/* <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div> */}
    </section>
  )
}

export default Contact