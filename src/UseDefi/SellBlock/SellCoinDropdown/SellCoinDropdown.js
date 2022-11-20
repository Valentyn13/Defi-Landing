import React, { useState } from 'react'
import "./SellCoinDropdown.css"
const SellCoinDropdown = ({coinsToSwap, selectedCoinToSwap, setSelectedCoinToSwap}) => {

    const [isActive, setIsActive] = useState(false)

  return (
<div className='sell-dropdown'>
    <div className='sell-dropdown-btn' onClick={()=>setIsActive(!isActive)}>
        <div className='sell-token-img'>
          { selectedCoinToSwap == false ? <div>empty</div> : <img className='sell-coin' src={selectedCoinToSwap.image} alt='coin'/>}
        </div>
        <div className='sell-token-symbol'>
        { selectedCoinToSwap == false ? <div>empty</div> : <div>{selectedCoinToSwap.symbol.toUpperCase()}</div> }
          </div>
    </div>
    {
      isActive && (
        <div className='sell-dropdown-content'>
            {coinsToSwap.map((dropCoin) => (
              <div className='token' onClick={()=>{
                setSelectedCoinToSwap(dropCoin)
                  setIsActive(false)
                  }
                }>
                <div className='sell-token-img'>
                   <img className='sell-coin' src={dropCoin.image} alt='coin'/>
                </div>
                <div className='dropdown-token-symbol'>
                  <div>
                    {dropCoin.symbol.toUpperCase()}
                  </div>
                </div>
              </div>
            )
            )}
        </div>
      )
    }
</div>
  )
}

export default SellCoinDropdown;