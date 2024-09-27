import React, {useState} from 'react'
import './LoginForm.css'
import OfferImage from '../../assets/images/offer-img.jpg'
import OtpComponent from './OtpComponent/OtpComponent';


const LoginForm = () => {
    const [isOtpFormVisible, setIsOtpFormVisible] = useState(false);
    // Handler to switch to the OTP form
  const handleContinueClick = () => {
    setIsOtpFormVisible(true);
  };
   
  return (
    <div className='loginform-container'>
        {isOtpFormVisible ? (
            <OtpComponent />
        ):(
        <div className="login-box">
            <div className="offer-img">
                <img src={OfferImage} alt="" />
            </div>
            <h2>Login <sub>or</sub> Signup </h2>
            <p>Please enter your mobile number</p>
            <div className="input-number">
                <span>+91</span>
                <input type="tel"maxLength={10} placeholder='Enter 10 digit number' />
            </div>
            <span className='term-link'>
                By continuing, you agree to Bookchor’s 
                <a href="/">Terms of Use & Policy</a>
            </span>
            <div className="login-btn">
                <button className="login-button" onClick={handleContinueClick}>Continue</button>
            </div>
        </div>
        )}
    </div>
  )
}

export default LoginForm
