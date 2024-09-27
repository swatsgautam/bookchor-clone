import React, {useState} from 'react'
import {filters} from '../data/filterData'
import './SideBar.css'

const SideBar = ({ onFilterChange }) => {
    // State for selected filters
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedBinding, setSelectedBinding] = useState("");
  

  // Handle checkbox changes for price filter
  const handlePriceChange = (e) => {
    const { value, checked } = e.target;
    const updatedPrices = checked
      ? [...selectedPrice, value]
      : selectedPrice.filter((price) => price !== value);

    setSelectedPrice(updatedPrices);
    onFilterChange({ type: 'price', value: updatedPrices });
  };

  // Handle checkbox changes for language filter
  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    const updatedLanguages = checked
      ? [...selectedLanguage, value]
      : selectedLanguage.filter((language) => language !== value);

    setSelectedLanguage(updatedLanguages);
    onFilterChange({ type: 'language', value: updatedLanguages });
  };

  // Handle checkbox changes for binding filter
  const handleBindingChange = (e) => {
    const { value, checked } = e.target;
    const updatedBindings = checked
      ? [...selectedBinding, value]
      : selectedBinding.filter((binding) => binding !== value);

    setSelectedBinding(updatedBindings);
    onFilterChange({ type: 'binding', value: updatedBindings });
  };

  return (
    <div className="side-bar">
      <div className="filter-heading">
        <p>Filter</p>
        <button style={{ display: 'none' }}>Clear</button>
        <span>Add Filters for more accurate results</span>
        <div className="filter-value-row" id="filterRow"></div>
      </div>

      {/* Price Filter */}
      <div className='filter-Categories'>
        <label className='filter-search'>Price Range:</label>
        {filters.price.map((priceOption) => (
          <div key={priceOption.id}>
            <input
              type="checkbox"
              id={`price-${priceOption.id}`}
              value={priceOption.value}
              checked={selectedPrice.includes(priceOption.value)}
              onChange={handlePriceChange}
            />
            <label htmlFor={`price-${priceOption.id}`}>{priceOption.label}</label>
          </div>
        ))}
      </div>

      {/* Language Filter */}
      <div  className='filter-Categories'>
        <label className='filter-search'>Language:</label>
        {filters.language.map((languageOption) => (
          <div key={languageOption.id}>
            <input
              type="checkbox"
              id={`language-${languageOption.id}`}
              value={languageOption.value}
              checked={selectedLanguage.includes(languageOption.value)}
              onChange={handleLanguageChange}
            />
            <label htmlFor={`language-${languageOption.id}`}>{languageOption.label}</label>
          </div>
        ))}
      </div>

      {/* Binding Filter */}
      <div  className='filter-Categories'>
        <label className='filter-search'>Binding Type:</label>
        {filters.binding.map((bindingOption) => (
          <div key={bindingOption.id}>
            <input
              type="checkbox"
              id={`binding-${bindingOption.id}`}
              value={bindingOption.value}
              checked={selectedBinding.includes(bindingOption.value)}
              onChange={handleBindingChange}
            />
            <label htmlFor={`binding-${bindingOption.id}`}>{bindingOption.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
