import React from 'react'
import './Contact.css'

import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>"Let’s build something amazing together — get in touch with me today."

"Have a project idea? I’d love to turn your vision into a stunning website."

"Reach out and let’s create fast, responsive, and modern web experiences."</p>
        <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>vaneezarashid4@gmail.com</p>

            </div>
             <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>Islamabad Soan gaeden CBR Town</p>
            </div>
             <div className="contact-detail">
                <img src={call_icon} alt="" />
                <p>03245995807</p>
            </div>
        </div>
        </div>
        <form className='contact-right'>
            <label htmlFor=''>your Name</label>
            <input type="text"placeholder='Enter Your Name'name='name' />
            <label htmlFor=''>your Email</label>
             <input type="email"placeholder='Enter Your email'name='email' />
             <label htmlFor=''>write your message here</label>
             <textarea name='message'rows="8"placeholder='enter your message'/>
             <button type='submit' className="contact-submit">submit now </button>

              </form>
      </div>
    </div>
  )
}
 
export default Contact
