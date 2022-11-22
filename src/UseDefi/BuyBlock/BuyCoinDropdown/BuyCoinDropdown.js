import React from 'react'
import "./BuyCoinDropdown.css"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCoinToBuy } from '../../../redux/reduxSlices/swapDefiSlice/swapDefiSlice'
const BuyCoinDropdown = () => {
    const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch();
  const coinToBuy = useSelector(state => state.swap.coinToBuy)
  const coinsToSwap = useSelector(state => state.swap.coinsToSwap)
  return (
    <div className='sell-dropdown'>
    <div className='sell-dropdown-btn' onClick={()=>setIsActive(!isActive)}>
        <div className='sell-token-img'>
          { coinToBuy == false ? <div>empty</div> : <img className='sell-coin' src={coinToBuy.image} alt='coin'/>}
        </div>
        <div className='sell-token-symbol'>
        { coinToBuy == false ? <div>empty</div> : <div>{coinToBuy.symbol.toUpperCase()}</div> }
          </div>
    </div>
    {
      isActive && (
        <div className='sell-dropdown-content buy-content'>
            {coinsToSwap.map((dropCoin) => (
              <div className='token' onClick={()=>{
                dispatch(setCoinToBuy(dropCoin))
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

export default BuyCoinDropdown