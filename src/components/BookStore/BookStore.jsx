import React, { useState} from 'react'
import './BookStore.css'
import ProductListing from '../ProductListing/ProductListing'
//import { BookContext } from '../../context/BookContext';
import SideBar from '../SideBar/SideBar';

const BookStore = () => {
  const [filters, setFilters] = useState({
    price: [],
    language: [],
    binding: [],
  });
  //Update filters based on sidebar changes
  const handleFilterChange = ({ type, value }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };
    //const { products } = useContext(BookContext);


    
  return (
    <div className='product-page'>
        <div className="product-container">
          <SideBar onFilterChange={handleFilterChange} />
            <ProductListing  filters={filters} />
        </div>     
    </div>
  )
}

export default BookStore
