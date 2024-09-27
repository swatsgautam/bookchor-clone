import React, { createContext, useState } from 'react';
import categories from '../data/bookData'

export const BookContext = createContext();

export const BookProvider = ({children}) =>{
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [books, setBooks] = useState([]);

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