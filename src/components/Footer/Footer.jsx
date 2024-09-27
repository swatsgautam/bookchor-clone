import React from 'react'
import logo from '../../assets/images/bookchor-logo.svg'
import fb from '../../assets/images/fb.svg'
import insta from '../../assets/images/insta.svg'
import twitter from '../../assets/images/twitter.svg'
import AppAndroid from '../../assets/images/app_android.svg'
import AppStore from '../../assets/images/app-store.svg'
import footerImg from '../../assets/images/payment-method.svg'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-row">
                <div className="footer-row-text">
                  <img src={logo} alt="" />
                  <p>
                  Ever wanted to buy a book but could not because it was too expensive? worry not! because Bookchor is here!
                  Bookchor, these days in news,is being called as the Robinhood of the world of books.
                  </p>
                  <ul className='footer-icons'>
                    <li>
                      <a href="/">
                        <img src={fb} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={insta} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={twitter} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav">
                  <h3 className='footer-title'>Our Links</h3>
                  <ul className="nav-footer">
                    <li>
                      <a href="/">About Us</a>
                    </li>
                    <li>
                      <a href="/">Contact Us</a>
                    </li>
                    <li>
                      <a href="/">Blogs</a>
                    </li>
                    <li>
                      <a href="/">Bookchor
                      Wholesale</a>
                    </li>
                    <li>
                      <a href="/">Sell with Us</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav">
                  <h3 className='footer-title'>Quick Links</h3>
                  <ul className="nav-footer">
                    <li>
                      <a href="/">Track Order</a>
                    </li>
                    <li>
                      <a href="/">FAQs</a>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav">
                  <h3 className='footer-title'>Support</h3>
                  <ul className="footer-info">
                    <li>
                      <i className="fa fa-phone"></i>
                      <a href="/"> 90501 11218</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i> Email :
                      <a href="/"> cs@bookchor.com</a>
                    </li>
                    
                  </ul>
                  <ul className="download-app">
                    <li>Download Mobile App</li>
                    <li>
                      <a href="/">
                        <img src={AppAndroid} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={AppStore} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>

            </div>
            <div className="footer-product-list">
              <span>Our Products :</span>
              <a href="/"> Bookchor</a>
              <a href="/">Lock The Box</a>
              <a href="/">Dump</a>
            </div>
            <div className="sub-footer">
              <span>© 2024 Bookchor , All rights reserved.</span>
              <img src={footerImg} alt="" />
            </div>
        </div>
    </footer>
  )
}

export default Footer
