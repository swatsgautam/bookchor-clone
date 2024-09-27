import React from 'react';
import QualityPoints from '../QualityPoints/QualityPoints';

const points = [
  {
    src : require('../../assets/images/icon1.png'),
    desc :'7 Million + Happy Customers'
  },
  {
    src : require('../../assets/images/icon2.jpeg'),
    desc :'100% Original Products'
  },
  {
    src : require('../../assets/images/icon4.png'),
    desc :'32 Points Quality Check'
  },
  
]
const ProductImages = ({ product }) => {
  return (
    <div className="product-image-container">
      <div className="product-details-container">
        <div className="product-item-vertical">
          <div className="product-item-vertical-list">
            <img src={product.src} alt={product.title} className="book-image" />
          </div>
        </div>
        <div className="product-item-big">
          <div className="product-item-big-list">
            <img src={product.src} alt={product.title} className="book-image-large" />
          </div>
        </div>
      </div>
      <QualityPoints points={points} />
    </div>
  );
};

export default ProductImages;
