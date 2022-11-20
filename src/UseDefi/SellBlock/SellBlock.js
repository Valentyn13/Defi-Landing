import React, { useEffect } from 'react'
import "./SellBlock.css"

import SellCoinDropdown from './SellCoinDropdown/SellCoinDropdown'
function SellBlock(props) {
   
    const {coinsToSwap, setSelectedCoinToSwap, selectedCoinToSwap,amount,setAmount} = props;

    useEffect(()=>setAmount(1),[selectedCoinToSwap])

  return (
    <div className='sell-block sell-block-bg'>
        <div className='sale-text-container'>
            <div className='sale-text'>You sell</div>
        </div>
        <div className='sell-content-block'> 
            <div className='selected-token'>
                <SellCoinDropdown coinsToSwap={coinsToSwap} selectedCoinToSwap={selectedCoinToSwap} setSelectedCoinToSwap={setSelectedCoinToSwap}/>
            </div>
            <div className='sell-input-wrapper'>
            <input type="number" value={amount} className='amount-tokens' onChange={(e)=>{
                    setAmount(e.target.value)
                    if (e.target.value === '') {
                        e.target.placeholder = 'Type amount of tokens'
                    }
                }
            }/>
            <div className='input-line'></div>
            </div>
        </div>
        <div className='sell-aditional-info'>
            <div className='name-of-token'>{selectedCoinToSwap.name}</div>
            <div className='price-of-selling-tokens'>{(amount * selectedCoinToSwap.current_price).toFixed(4)}$</div>
        </div>
  </div>
  )
}

export default SellBlock