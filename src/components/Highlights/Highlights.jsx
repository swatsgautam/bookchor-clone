import React from 'react'
import lang from '../../assets/images/language.png'
import page from '../../assets/images/pages.png'
import isbn from '../../assets/images/isbn.png'
import width from '../../assets/images/width.png'
import height from '../../assets/images/height.png'
import bind from '../../assets/images/binding.png'
import publish from '../../assets/images/published-date.png'
import spine from '../../assets/images/spine-width.png'

const highlightsData = [
  { icon: lang, value: 'ENGLISH', label: 'Language' },
  { icon: page, value: '250', label: 'Pages' },
  { icon: isbn, value: '9780143456544', label: 'ISBN' },
  { icon: width, value: '129 mm', label: 'Width' },
  { icon: height, value: '198 mm', label: 'Height' },
  { icon: bind, value: 'PAPERBACK', label: 'Binding' },
  { icon: publish, value: '2022', label: 'Publish Date' },
  { icon: spine, value: '25 mm', label: 'Spine Width' },
];
const Highlights = () => {
  return (
    <div className='highlights'>
    <h3>Highlights</h3>
    <ul>
      {highlightsData.map((item, index) => (
        <li key={index}>
          <i>
            <img src={item.icon} alt={item.label} />
          </i>
          <p>{item.value}</p>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Highlights
