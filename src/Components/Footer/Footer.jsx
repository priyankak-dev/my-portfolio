import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/photo.png'
import user_icon from '../../assets/user_icon.svg'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Delivering high-quality web solutions with a focus on functionality, design, and user experience.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />

        <div className="footer-bottom">
            <p className="footer-bottom-left">
                2024 All Rights 
            </p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect WIth Me</p>

            </div>
        </div>

      
    </div>
  )
}

export default Footer
