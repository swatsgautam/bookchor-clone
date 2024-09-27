import React from 'react';
import BookDetails from '../BookDetails/BookDetails';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import CoinComponent from '../CoinComponent/CoinComponent';
import Highlights from '../Highlights/Highlights';
import Pincode from '../Pincode/Pincode';

const ProductInfo = ({ product }) => {
  // Calculate the amount saved and the discounted price
  const originalPrice = parseFloat(product.originalPrice.replace('₹', '')); // Remove ₹ and convert to number
  const discountPercentage = parseFloat(product.discount.replace('% OFF', '')); // Remove '% OFF' and convert to number
  const discountAmount = Math.floor((originalPrice * discountPercentage) / 100); // Calculate discount
  const discountedPrice = Math.floor((originalPrice - discountAmount)); // Calculate the price after discount

  return (
    <div className="products-details-info">
      <ul className="breadcrumbs">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">{product.title}</a>
        </li>
      </ul>
      <h1>{product.title}</h1>
      <ul className="author">
        <li>
          <span>Author :</span>
          <strong>
            <a href="/">Akshat Gupta</a>
          </strong>
        </li>
        <li>
          <span>Binding :</span>
          <strong>Paperback</strong>
        </li>
      </ul>
      <div className="product-price">
        <p>{discountedPrice}</p>
        <del>{product.originalPrice}</del>
        <span>{product.discount}</span>
        <strong>You save ₹ {discountAmount}</strong>
      </div>
      <BookDetails />
      <ButtonComponent />
      <CoinComponent />
      <Highlights />
      <Pincode />
    </div>
  );
};

export default ProductInfo;
