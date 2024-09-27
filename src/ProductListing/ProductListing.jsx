import React, {useContext, useEffect, useState} from 'react'
import './ProductListing.css'
import { BookContext } from '../context/BookContext';

const ProductListing = () => {
  const { categories } = useContext(BookContext);
  const [usedBooks, setUsedBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState('null');

// Fetch books that have isUsed as true
useEffect(() => {
    const filteredBooks = categories.flatMap(category =>
      category.books.filter(book => book.isUsed === true)
    );
    setUsedBooks(filteredBooks);
  }, []);
  

  // Sort books based on selected order
  const sortedBooks = usedBooks.sort((a, b) => {
    if (sortOrder === 'low_high') {
      return parseFloat(a.price.replace('₹ ', '')) - parseFloat(b.price.replace('₹ ', ''));
    }
    if (sortOrder === 'high_low') {
      return parseFloat(b.price.replace('₹ ', '')) - parseFloat(a.price.replace('₹ ', ''));
    }
    return 0; // Default case (no sorting)
  });

  return (
    <div className='product-listing'>
      <div className="sort-by-totalno">
        <p className="totalno-product">
            Showing 
            <span className="range"> 1 – {sortedBooks.length}  </span>
            of 
            <span className="total_item"> {usedBooks.length}  </span>
            results for "Used Books"
        </p>
        <div className="sort-by">
            <span>Sort By :</span>
            <select 
                name="" 
                id="sort_by_value"
                value={sortOrder} 
                onChange={(e) => setSortOrder(e.target.value)} 
            >
                <option value="null">Select</option>
                <option value="low_high">Low to High</option>
                <option value="high_low">High to Low</option>
            </select>
        </div>
      </div>

      <div className="product-listing-row">
      {usedBooks.map((book) => (
        <div className="product-item" key={book.id}>
            <div className="product-item-img">
                <a href="/">
                    <img src={book.src} alt="" />
                </a>
            </div>
            <div className="product-item-info">
                <h3>
                    <a href="/">{book.title}</a>
                </h3>
                <p>William Shakespeare , Rex Gibson , William Shakespeare</p>
                <div className="product-price"> 
                    <span>{book.price}</span> 
                    <del>{book.originalPrice}</del> 
                    <code>{book.discount}</code>
                </div>
                <ul className="rateing">
                    <li className="fill"></li>
                    <li className="fill"></li>
                    <li className="half"></li>
                    <li className="without-fill"></li>
                    <li className="without-fill"></li>
                </ul>
            </div>
            
        </div>
         ))}
      </div>
    </div>
  )
}

export default ProductListing
