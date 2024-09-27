import React from 'react'
import logo from '../../assets/images/bookchor-logo.svg'

const Navbar = () => {
  return (
    <div className="header-section">
      <div className="container">
        <div className="header-left">
         
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>

          {/* Search Section */}
          <div className="search-row">
            <select>
              <option>All</option>
            </select>

            <input
              type="text"
              placeholder="Search by ISBN, Title, Author"
              id="dtop_input"
              value=""
            />

            <button>
              <i className='fa fa-search'></i>
            </button>

            <ul className="auto-search" id="dtopSearch" style={{ display: 'none' }}>
              {/* Auto search suggestions will go here */}
            </ul>
          </div>
        </div>

        {/* Header Right */}
        <div className="header-right">
          <ul>
            <li>
              <a className='user-icon'>
                <i className='fa fa-user'>
                  
                </i>
              </a>
              <span>
                <a href="/login">Login</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
