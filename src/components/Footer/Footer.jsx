import React from 'react'
import './Footer.css'
import footer_logo from'../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo}alt="" />
                <p>im frontend developer from islamabad</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
             <img src={user_icon} alt="" />
               <input type='email'placeholder='Enter Youer email'/>
               
                </div>
                <div className="footer-subscribe">subscribe</div>
            </div>
        </div>
      <hr/>
      <div className="footer-bottom">
        <p className='footer-bottom-left'> @2025 vaneeza rashid software engineer</p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>privacy policy</p>
            <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
