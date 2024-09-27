import React from 'react'

const qualityChecks = [
    '32 Quality Checks',
    'Spine',
    'Inside',
    'Overall : These are new books which directly come from the supplier.'
  ];
  
const BookDetails = () => {
  return (
    <div className='radio-tabs'>
      <div className="tab">
        <input type="radio" id='tab0' defaultChecked />
        <label className="tab" htmlFor='tab0'>
          <i className="fa fa-book-open"></i>
          <p>
            New 
            <span>₹ 479</span>
          </p>
        </label>
        <div className="content">
          <ul>
            {qualityChecks.map((check, index) => (
              <li key={index}>
                <i className="fa fa-check-circle"></i>
                {check}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BookDetails