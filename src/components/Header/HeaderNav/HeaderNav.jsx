import React, {useContext} from 'react';
import './HeaderNav.css'
import CategoryIcon from '../../../assets/images/Category-icon.svg'
import { Link } from 'react-router-dom';
import { BookContext } from '../../../context/BookContext';


// List of featured categories with their corresponding paths
const featuredCategories = [
  { name: 'Used Books', path: '/store/used-books' },
  { name: '39 Store', path: '/store/39-store' },
  { name: '99 Store', path: '/store/99-store' },
  { name: 'Hindi Literature', path: '/store/hindi-literature' },
  { name: 'Children', path: '/store/children' },
  { name: 'Text Books', path: '/store/text-books' },
  { name: 'Harry Potter Store', path: '/store/harry-potter-store' },
  { name: 'Manga Store', path: '/store/manga-store' },
  { name: 'Lock The Box', path: '/store/lock-the-box' },
  { name: 'Literature and Fiction', path: '/store/literature-and-fiction' },
  { name: 'India Top Read', path: '/store/india-top-read' },
];
const HeaderNav = () => {
  const { selectCategory } = useContext(BookContext);
  return (
    <div className="header-nav">
      <div className="container">
        <div className="header-nav-left">
          {/* Shop By Category */}
          <div className="Category-click">
            <i><img src={CategoryIcon} alt="category" /></i>
            Shop By Category
           
          </div>

          {/* Shop By Store */}
          <div className="Category-click">
            <i></i>Shop By Store
           
          </div>


<nav className="header-nav-links stack-tab-container">
            <div className="tab-bar">
              <div className="left-arrow">
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <ul className="tabs">
                {featuredCategories.map((category, index) => (
                  <li key={index}>
                    <Link to={category.path} onClick={() => selectCategory(category.name)}>{category.name}</Link> {/* Link to dynamic path */}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
