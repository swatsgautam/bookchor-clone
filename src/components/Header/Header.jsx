import React from 'react'
import Navbar from './Navbar'
import HeaderNav from './HeaderNav/HeaderNav'

const Header = () => {
  return (
    <>
        <header className='header-container'> 
            <div className="header">
            <div className="container">
                <div className="header-top">
                    <p className="extra-off">
                    Get Rs50 extra off, Use Code : APP50 GET APP
                    </p>
                    <ul>
                        <li>
                            <i className='fa-solid fa-th-large'>
                                <img src="" alt="" />
                            </i>
                            <a href="">Lock The Box</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-book-open">
                                <img src="" alt="" />
                            </i>
                            <a href="">Wholesale</a>
                        </li>
                        <li>
                            <i className='fa-solid fa-phone'>
                                <img src="" alt="" />
                            </i>
                            <a href="">Call : 90501 11218</a>
                        </li>
                        <li>
                            <i className='fa-solid fa-truck-fast'>
                                <img src="" alt="" />
                            </i>
                            <a href="">Track Order</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>           
            
            <Navbar />
            <HeaderNav />
        </header>

    </>
  )
}

export default Header
