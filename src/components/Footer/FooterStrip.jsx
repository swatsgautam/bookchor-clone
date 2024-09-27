import React from 'react'
import './Footer.css'

const FooterStrip = () => {
  return (
    <div className='footer-strip'>
      <ul>
        <li>
            <a href=""><i className='fa fa-truck-fast'></i></a>
            <span>Free Delivery</span>
        </li>
        <li>
            <a href=""><i className="fa fa-credit-card"></i></a>
            <span>Cash on Delivery</span>
        </li>
        <li>
            <a href=""><i className="fa fa-check-circle"></i></a>
            <span>Original Products</span>
        </li>
        <li>
            <a href=""><i className="fa fa-retweet"></i></a>
            <span>Easy Replacement</span>
        </li>
      </ul>
    </div>
  )
}

export default FooterStrip
