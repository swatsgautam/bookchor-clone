import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import './ProductDetails.css'
import { BookContext } from '../../context/BookContext';
import ProductImages from '../ProductImages/ProductImages';
import ProductInfo from '../ProductInfo/ProductInfo';
import Assured from '../AssuredComponent/Assured';
import Description from '../Description/Description';
import AboutAuthor from '../AboutAuthor/AboutAuthor';


const ProductDetails = () => {
  const { productId } = useParams();
  const {books} = useContext(BookContext)

  // console.log("product id ", productId)
  // // Flatten categories to find the product by ID
  // const allProducts = Object.values(books).flat();
    
  // // Ensure productId is being compared correctly
  // const product = allProducts.find(item => item.id.toString() === productId);

  // if (!product) {
  //     return <div>Product not found</div>; // Handle case when product is not found
  // }

  console.log("product id ", productId);
  console.log("books array", books)
  
  // Ensure productId is being compared correctly
  // Assuming books is a flat array of products
  const product = books.find(item => item.id.toString() === productId);

  if (!product) {
    return <div>Product not found</div>; // Handle case when product is not found
  }
  return (
    <div className="product-container">
      <div className="container">
        <div className="product-details">
          <div className="product-details-top">
            <ProductImages product={product} />
            
            <ul className="share-icon">
              <li>
                <i className="fa fa-heart"></i>
              </li>
              <li>
                <i className="fa fa-share-alt"></i>
              </li>
            </ul>
            <ProductInfo product={product} />
          </div>
          <Assured />
          <Description />
          <AboutAuthor />
        </div>
        
      </div>
    </div>
  )
}

export default ProductDetails
