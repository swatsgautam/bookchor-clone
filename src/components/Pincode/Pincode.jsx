import React from 'react'

const Pincode = () => {
  return (
    <div className='Check_Delivery'>
      <h3>Check Delivery</h3>
      <div className="pincode_input">
        <input type="text" placeholder='Enter Pincode' />
        <button>Check</button>
      </div>
      <span>Enter pincode for exact delivery dates / charges and to know if express delivery is available</span>
    </div>
  )
}

export default Pincode
