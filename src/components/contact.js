import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';
const Contact = () => {
 
  const form = useRef();
 
  const sendEmail = (e) => {
   e.preventDefault();
 
   emailjs.sendForm('service_rhxt1jq', 'template_6k3cjep', form.current, 'wwZfWo8ZJTWmQoaMb')
    
 
e.target.reset();
   };
 
 return (
   <section id='contact'>
     <h4 className='register'>Get In Touch</h4>
     
     <div className="container contact__container">
       <div className="contact__options">
         <article className="contact__option">
         <MdOutlineEmail  className='contact__option-icon'/>
           <h4>Email</h4>
           <h5>vasu786beri@gmail.com</h5>
           <a href="mailto:vasu786beri@gmail.com " target="__blank">send a message</a>
         </article>
 
         <article className="contact__option">
         <RiMessengerLine   className='contact__option-icon'/>
           <h4>Messanger</h4>
           <h5>vasu.beri786</h5>
           <a href="https://facebook.com" target="__blank">send a message</a>
         </article>
 
         <article className="contact__option">
         <BsWhatsapp  className='contact__option-icon'/>
           <h4>Whatsapp</h4>
           <h5>+91XXXXXXX893</h5>
           <a href="https://whatsapp.com" target="__blank">send a message</a>
         </article>
       </div>
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='your full name ' required />
         <input type="email" name='email' placeholder='Your email' required />
         <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary'>send message</button>
       </form>
     </div>
   </section>
 )
}
 
export default Contact
