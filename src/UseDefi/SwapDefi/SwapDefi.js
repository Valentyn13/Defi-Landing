import React from 'react';
import "./SwapDefi.css";
import { useState } from 'react';
import { useEffect } from 'react';
import {IoCloseCircleOutline} from "react-icons/io5";
import DropdownNetworks from "./DropdownNetworks"
import SellBlock from '../SellBlock/SellBlock';
import BuyBlock from '../BuyBlock/BuyBlock';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Modal from './Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { getCoinsToSwap } from '../../redux/reduxSlices/swapDefiSlice/swapDefiSlice';
import LoadPage from '../../components/Loadpage/LoadPage';

import { setSelectedCoinToSwap } from '../../redux/reduxSlices/swapDefiSlice/swapDefiSlice';
import { setCoinToBuy } from '../../redux/reduxSlices/swapDefiSlice/swapDefiSlice';

const SwapDefi = () => {
const dispatch = useDispatch()
const [walletConnected, setWalletConnected] = useState(false)

const selected = useSelector((state) => state.swap.selected)
const [amount,setAmount] = useState(1)
const [confirmOperation, setConfirmOperation] = useState(false)
const status = useSelector(state => state.swap.status)
useEffect(() => {
dispatch(getCoinsToSwap())
}, [selected])

const selectedCoinToSwap = useSelector(state => state.swap.selectedCoinToSwap)
const coinToBuy = useSelector(state => state.swap.coinToBuy)

  const handleWalletConnect = () => {
    setWalletConnected(!walletConnected)
  }

  return (
    <div className='swap-defi'>
      <div className='container'>
      {status === 'loading' && <LoadPage/> }
            {status === 'resolve' && (
                        <div className='work-zone'>

                        <div className='work-zone-header'>
                          <div className='select-network'>
                            <DropdownNetworks />
                          </div>
                          <div className='connect-wallet'>
                              <div className={walletConnected ? 'connected connected-styles' : 'unconnected'}>Wallet connected</div>
                              <button className={walletConnected ? 'unconnected' : 'connected btn-outline btn'} onClick={handleWalletConnect}>Connect wallet</button>
                              <div className={walletConnected ? 'connected disconect-wallet' : 'unconnected disconect-wallet'}>
                                {walletConnected ? <IoCloseCircleOutline className='disable-icon' onClick={handleWalletConnect} /> : <IoCloseCircleOutline className='unconnected'/>}
                              </div>
                          </div>
                        </div>
                        <div className='work-zone-swap'>
                            <SellBlock   amount={amount} setAmount={setAmount}/>
                            <div 
                             className='reverse-tokens'>
                              <BsFillArrowDownCircleFill onClick={() => {
                                  dispatch(setSelectedCoinToSwap(coinToBuy))
                                  dispatch(setCoinToBuy(selectedCoinToSwap))
                              }} className='bs-icon'/>
                            </div>
                            <BuyBlock amount={amount}/>
                            <div className='confirm-operation-btn'>
                              <button onClick={() =>{
                                walletConnected ? setConfirmOperation(true) : alert("Connect wallet")
                              } } className='btn'>Confirm operation</button>
                              <Modal active={confirmOperation} setActive={setConfirmOperation}>
                              <div>Transaction detail</div>
                              <div>Network:{selected}</div>
                              <div className='modal-sell-detail'>
                                <div>Sell: {selectedCoinToSwap.name}</div>
                                <div>Amount:{amount}</div>
                                <div>Price:{amount * selectedCoinToSwap.current_price}</div>
                              </div>
                              <div className='modal-buy-detail'>
                                <div>Buy: {coinToBuy.name}</div>
                                <div>Amount:{((selectedCoinToSwap.current_price / coinToBuy.current_price)*amount).toFixed(2)}</div>
                              </div>
                            </Modal>
                            </div>
                        </div>
                      </div> 
            )}

      </div>
    </div>
  )
}
export default SwapDefi;