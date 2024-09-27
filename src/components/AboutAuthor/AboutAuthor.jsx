import React from 'react'
import authorImg from '../../assets/images/rich_dad_author.jpg'

const AboutAuthor = () => {
  return (
    <div className='about-author' id='authorSection'>
      <h2>About the Author</h2>
      <p>Add authors to get new release updates, plus improved recommendations.</p>
      <div className="about-author-row">
        <div className="about-author-img">
            <img src={authorImg} alt="" />
        </div>
        <div className="about-author-info">
            <h3>Robert T. Kiyosaki</h3>
            <ul className='rating'>
                <li className="fill"></li>
                <li className="fill"></li>
                <li className="fill"></li>
                <li className="fill"></li>
                <li className="without-fill"></li>
            </ul>
            <button>Add to Fav</button>
        </div>
        <p>
            <span>
                <b>Robert Toru Kiyosaki </b>
                is an American businessman and author. Kiyosaki is the founder of Rich Global LLC and the Rich Dad Company, a private financial education company that provides personal finance and business education to people through books and videos.
            </span>
        </p>
      </div>
    </div>
  )
}

export default AboutAuthor
