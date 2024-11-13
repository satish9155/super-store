import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            {/* <img src={assets.logo} alt="" /> */}
            <h1 className='ab'>Super store</h1>
            <p1>Did you ever imagine that the freshest of fruits and vegetables, top-quality pulses and food grains, dairy products, and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? In today's fast-paced world, superstore.com, India's pioneering online grocery store, continues to bring a staggering array of over 40,000 products from more than 1,000 brands to the doorsteps of over 10 million satisfied customers. From essential household cleaning products to the latest beauty and makeup trends, superstore remains your one-stop shop for daily needs.</p1>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9155495710</li>
                <li>contact@superstore.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Superstore.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
