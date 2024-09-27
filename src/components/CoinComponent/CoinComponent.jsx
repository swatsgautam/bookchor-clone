import React from 'react'
import BCoin from '../../assets/images/bcoin.png'

const CoinComponent = () => {
  return (
    <div className='bookchor-coins'>
      <img src={BCoin} alt="" />
      <p>
      For every 100 Spent, <br />
      <span>
      You earn 1 Bookchor Coins
      
      </span>
      </p>
    </div>
  )
}

export default CoinComponent
