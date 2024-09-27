import React, { createContext, useState, useEffect } from 'react';
import categories from '../data/bookData'

export const BookContext = createContext();

export const BookProvider = ({children}) =>{
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [books, setBooks] = useState([]);
    
    // console.log(books)
    // const selectCategory = (category) => {
    //     setSelectedCategory(category);
    //     const selectedBooks = categories[category] || [];
    //     setBooks(selectedBooks);
    // };


    // const selectCategory = (categoryName) => {
    //     setSelectedCategory(categoryName);

    //     // Find the category object based on the categoryName
    //     const categoryObject = categories.find(cat => cat.category === categoryName);

    //     // If the category is found, set the books, otherwise set an empty array
    //     if (categoryObject) {
    //         setBooks(categoryObject.books);
    //     } else {
    //         setBooks([]);
    //     }
    // };

    //console.log(books);

    const selectCategory = (categoryTitle) => {
        setSelectedCategory(categoryTitle);
        const selectedCategoryData = categories.find(category => category.category === categoryTitle);
        
        console.log("Selected Category Data: ", selectedCategoryData); // Log this to check the fetched category data
    
        if (selectedCategoryData) {
            setBooks(selectedCategoryData.books);
        } else {
            setBooks([]);
        }
    };
  
   
    return(
        <BookContext.Provider value={{ categories: categories, selectCategory, selectedCategory, books }}>
            {children}
        </BookContext.Provider>
    );
}