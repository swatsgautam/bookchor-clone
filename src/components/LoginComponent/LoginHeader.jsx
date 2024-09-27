import React from 'react'
import logo from '../../assets/images/bookchor-logo.svg'
import './LoginHeader.css'
import { useNavigate } from 'react-router-dom';

const LoginHeader = () => {
  const navigate = useNavigate();

  // Function to handle login and navigation
const handleLogin = () => {
  console.log("clicked")
  // Perform any validation or API call here if needed
  navigate('/'); // Navigate to the homepage
};
  return (
    <header className='login-header'>
        <i className='fa fa-arrow-left' onClick={handleLogin}></i>
        <div className="logo">
            <a href="/">
                <img src={logo} alt="" />
            </a>
        </div>
    </header>
  )
}

export default LoginHeader
