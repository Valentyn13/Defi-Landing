import React from 'react';
import "./SwapDefi.css";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {IoCloseCircleOutline, IoPricetag} from "react-icons/io5";
import DropdownNetworks from "./DropdownNetworks"
import SellBlock from '../SellBlock/SellBlock';
import BuyBlock from '../BuyBlock/BuyBlock';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Modal from './Modal/Modal';
const SwapDefi = () => {

  const [walletConnected, setWalletConnected] = useState(false)
  const [coinsToSwap, setCoinsToSwap] = useState([])

const [selected, setSelected] = useState('Ethereum')
const [selectedCoinToSwap, setSelectedCoinToSwap] = useState('')

const [coinToBuy, setCoinToBuy] = useState('')
const [amount,setAmount] = useState(1)

const [confirmOperation, setConfirmOperation] = useState(false)

useEffect(() => {
  let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=ethereum-ecosystem&order=market_cap_desc&per_page=25&page=1&sparkline=false';
  if (selected.toLocaleLowerCase() === 'ethereum'){
    url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=ethereum-ecosystem&order=market_cap_desc&per_page=25&page=1&sparkline=false"
  }

  if (selected.toLocaleLowerCase() === 'bnb chain'){
    url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=binance-smart-chain&order=market_cap_desc&per_page=25&page=1&sparkline=false"
  }

  if (selected.toLocaleLowerCase() === 'polygon'){
    url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=polygon-ecosystem&order=market_cap_desc&per_page=25&page=1&sparkline=false"
  }

  axios.get(url).then((response)=> {
    setCoinsToSwap(response.data)
    console.log(response.data)
    setSelectedCoinToSwap(response.data[0])
    setCoinToBuy(response.data[1])

}).catch((error)=> {
    console.log(error)
})


}, [selected])



  const handleWalletConnect = () => {
    setWalletConnected(!walletConnected)
  }

  return (
    <div className='swap-defi'>
      <div className='container'>
          <div className='work-zone'>
            <div className='work-zone-header'>
              <div className='select-network'>
                <DropdownNetworks selected={selected} setSelected={setSelected}/>
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
                <SellBlock coinsToSwap={coinsToSwap} selectedCoinToSwap={selectedCoinToSwap} setSelectedCoinToSwap={setSelectedCoinToSwap} amount={amount} setAmount={setAmount}/>
                <div onClick={()=> {
                  setSelectedCoinToSwap(coinToBuy);
                  setCoinToBuy(selectedCoinToSwap)
                }} className='reverse-tokens'>
                  <BsFillArrowDownCircleFill className='bs-icon'/>
                </div>
                <BuyBlock coinsToSwap={coinsToSwap} coinToBuy={coinToBuy} setCoinToBuy={setCoinToBuy} selectedCoinToSwap={selectedCoinToSwap} amount={amount}/>
                <div className='confirm-operation-btn'>
                  <button onClick={() => setConfirmOperation(true)} className='btn'>Confirm operation</button>
                  <Modal active={confirmOperation} setActive={setConfirmOperation}>
                    some text
                  </Modal>
                </div>
            </div>
          </div> 
      </div>
    </div>
  )
}
export default SwapDefi;