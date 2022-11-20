import React from 'react'
import "./BuyBlock.css"
import BuyCoinDropdown from './BuyCoinDropdown/BuyCoinDropdown';

function BuyBlock(props) {

    const {coinsToSwap,coinToBuy,setCoinToBuy,selectedCoinToSwap,amount} = props;

  return (
    <div className='sell-block byu-block-bg'>
        <div className='sale-text-container '>
            <div className='sale-text'>You buy</div>
        </div>
        <div className='sell-content-block byu'> 
            <div className='selected-token'>
                <BuyCoinDropdown coinsToSwap={coinsToSwap} coinToBuy={coinToBuy} setCoinToBuy={setCoinToBuy}/>
            </div>
            <div className='buy-tokens-amount'>{((selectedCoinToSwap.current_price / coinToBuy.current_price)*amount).toFixed(2)}</div>
        </div>
        <div className='sell-aditional-info'>
            <div className='name-of-token'>{coinToBuy.name}</div>
            <div className='price-of-selling-tokens'>{coinToBuy.current_price}</div>
        </div>
  </div>
  )
}

export default BuyBlock