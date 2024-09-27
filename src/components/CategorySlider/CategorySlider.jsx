import React, {useContext, useState, useEffect} from 'react'
import './CategorySlider.css'
import { BookContext } from '../../context/BookContext';
import { useNavigate } from 'react-router-dom';

const CategorySlider = ({categoryTitle}) => {
  const { selectCategory, books } = useContext(BookContext)
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    // Select the category when the component mounts
    useEffect(() => {
        selectCategory(categoryTitle);
        setCurrentIndex(0); // Reset current index when category changes
    }, [categoryTitle, selectCategory]);

    // Go to the next product
    const goToNext = () => {
        setCurrentIndex((prevIndex) => {
            // Calculate the new index and wrap around if needed
            const nextIndex = prevIndex + 1;
            return nextIndex >= books.length ? 0 : nextIndex;
        });
    };

    // Go to the previous product
    const goToPrev = () => {
        setCurrentIndex((prevIndex) => {
            // Calculate the new index and wrap around if needed
            const prevIndexCalc = prevIndex - 1;
            return prevIndexCalc < 0 ? books.length - 1 : prevIndexCalc;
        });
    };

    // Function to handle product click
    const handleProductClick = (productId) => {
      console.log(productId)
      navigate(`/product/${productId}`); // Navigate to the product details page
    };

  return (
    <div className='category-container'>
        <div className="container">
            <div className="top-row">
                <h1>{categoryTitle}</h1>
                <span>
                    <a href="/" className='view-all'>View All</a>
                </span>
            </div>
            <div className="product-container">
                <button className="carousel-btn prev-btn" onClick={goToPrev}>
                    <i className='fa fa-chevron-left'></i>
                </button>
                <div className="product-draggable-container">
                <div className="product-carousel" style={{ transform: `translateX(-${currentIndex * 196}px)`, // Adjust the translate value
                                transition: 'transform 0.5s ease', 
                                display: 'flex', }}>
                            {books.length > 0 ? (
                                books.map((product) => (
                                  
                                    <div className="product-item" style={{ width: '196px' }} key={product.id}>
                                        <div className="product-img" onClick={() => handleProductClick(product.id)}>
                                            <img src={product.src} alt={product.title} />
                                        </div>
                                        <div className="product-info">
                                            <h3>
                                                <a href="/">{product.title}</a>
                                            </h3>
                                            <div className="product-price">
                                                <span>{product.price}</span>
                                                <del>{product.originalPrice}</del>
                                                <code>{product.discount}</code>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No products available in this category.</p>
                            )}
            </div>
                </div>
                <button className="carousel-btn next-btn" onClick={goToNext}>
                    <i className='fa fa-chevron-right'></i>
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default CategorySlider
