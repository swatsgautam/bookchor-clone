import React from 'react';
import './Footer.css';

const FooterStrip = () => {
  const features = [
    { icon: 'fa-truck-fast', text: 'Free Delivery' },
    { icon: 'fa-credit-card', text: 'Cash on Delivery' },
    { icon: 'fa-check-circle', text: 'Original Products' },
    { icon: 'fa-retweet', text: 'Easy Replacement' },
  ];

  return (
    <nav className="footer-strip">
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <i className={`fa ${feature.icon}`} aria-hidden="true"></i>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterStrip;
