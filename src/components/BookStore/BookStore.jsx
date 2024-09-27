import React, {useContext} from 'react'
import './BookStore.css'
import ProductListing from '../../ProductListing/ProductListing'
import { BookContext } from '../../context/BookContext';
import SideBar from '../../SideBar/SideBar';

const BookStore = () => {
    const { products } = useContext(BookContext);
  return (
    <div className='product-page'>
        <div className="product-container">
          <SideBar />
            <ProductListing  products={products} />
        </div>     
    </div>
  )
}

export default BookStore
