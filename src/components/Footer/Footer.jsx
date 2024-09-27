import React from 'react';
import logo from '../../assets/images/bookchor-logo.svg';
import fb from '../../assets/images/fb.svg';
import insta from '../../assets/images/insta.svg';
import twitter from '../../assets/images/twitter.svg';
import AppAndroid from '../../assets/images/app_android.svg';
import AppStore from '../../assets/images/app-store.svg';
import footerImg from '../../assets/images/payment-method.svg';

const Footer = () => {
  const socialIcons = [
    { src: fb, alt: 'Facebook', link: '/' },
    { src: insta, alt: 'Instagram', link: '/' },
    { src: twitter, alt: 'Twitter', link: '/' },
  ];

  const ourLinks = [
    { text: 'About Us', link: '/' },
    { text: 'Contact Us', link: '/' },
    { text: 'Blogs', link: '/' },
    { text: 'Bookchor Wholesale', link: '/' },
    { text: 'Sell with Us', link: '/' },
  ];

  const quickLinks = [
    { text: 'Track Order', link: '/' },
    { text: 'FAQs', link: '/' },
    { text: 'Privacy Policy', link: '/' },
    { text: 'Terms & Conditions', link: '/' },
  ];

  const products = ['Bookchor', 'Lock The Box', 'Dump'];

  const renderLinks = (links) => (
    <ul className="nav-footer">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.link}>{link.text}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-row-text">
            <img src={logo} alt="Bookchor logo" />
            <p>
              Ever wanted to buy a book but could not because it was too expensive? Worry not! Because Bookchor is here! Bookchor, these days in news, is being called the Robinhood of the world of books.
            </p>
            <ul className="footer-icons">
              {socialIcons.map((icon, index) => (
                <li key={index}>
                  <a href={icon.link}>
                    <img src={icon.src} alt={icon.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav">
            <h3 className="footer-title">Our Links</h3>
            {renderLinks(ourLinks)}
          </div>

          <div className="footer-nav">
            <h3 className="footer-title">Quick Links</h3>
            {renderLinks(quickLinks)}
          </div>

          <div className="footer-nav">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-info">
              <li>
                <i className="fa fa-phone"></i>
                <a href="tel:9050111218"> 90501 11218</a>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                Email: <a href="mailto:cs@bookchor.com"> cs@bookchor.com</a>
              </li>
            </ul>
            <ul className="download-app">
              <li>Download Mobile App</li>
              <li>
                <a href="/">
                  <img src={AppAndroid} alt="Download on Android" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={AppStore} alt="Download on iOS" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-product-list">
          <span>Our Products: </span>
          {products.map((product, index) => (
            <a key={index} href="/">
              {product}
            </a>
          ))}
        </div>

        <div className="sub-footer">
          <span>© 2024 Bookchor, All rights reserved.</span>
          <img src={footerImg} alt="Payment methods" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
