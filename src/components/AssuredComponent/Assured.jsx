import React from 'react'
import bookIcon from '../../assets/images/book-icon.svg'

const assuranceData = [
    { title: '100% Genuine books', link: '/' },
    { title: 'Maximum Quality assured', link: '/' },
    { title: 'Get what you see', link: '/' },
    { title: 'Honest discounts', link: '/' },
  ];
const Assured = () => {
  return (
    <div className='Bookchor-Assured'>
      <h3>Bookchor Assured</h3>
      <ul>
        {assuranceData.map((item, index) => (
          <li key={index}>
            <i>
              <img src={bookIcon} alt={item.title} />
            </i>
            <div>
              <h3>{item.title}</h3>
              <a href={item.link}>Learn More</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Assured
