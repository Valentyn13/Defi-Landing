import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./SellCoinDropdown.css"
import { setSelectedCoinToSwap } from '../../../redux/reduxSlices/swapDefiSlice/swapDefiSlice'

const SellCoinDropdown = () => {
  const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false)
    const coinsToSwap = useSelector(state => state.swap.coinsToSwap)
    const selectedCoinToSwap = useSelector(state => state.swap.selectedCoinToSwap)
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
          {console.log(coinsToSwap)}
            {coinsToSwap.map((dropCoin) => (
              <div className='token' onClick={()=>{
                dispatch(setSelectedCoinToSwap(dropCoin))
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