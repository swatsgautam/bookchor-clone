import React from 'react'
import '../LoginForm.css'
import './OtpComponent.css'


const OtpComponent = () => {
  return (
    <div className='login-box'>
        <h2>Verify OTP</h2>
        <p>We’ve sent an OTP on your registered number.</p>
        <div className="input-number">
            <span>+91</span>
            <input type="tel" readOnly />
            <button className="change-number">CHANGE</button>
        </div>
        <div className="code-inputs">
            <input type="tel" className='form-control' />
            <input type="tel" className='form-control' />
            <input type="tel" className='form-control' />
            <input type="tel" className='form-control' />
        </div>
        <div className="login-btn">
            <button className="login-button">Continue</button>
        </div>
        <p className="resend-code">
        Resend code : 
        <a href="/" className="resend-button">Resend</a>
        </p>
    </div>
  )
}

export default OtpComponent
