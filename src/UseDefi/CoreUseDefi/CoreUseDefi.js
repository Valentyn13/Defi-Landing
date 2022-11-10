import "./CoreUseDefi.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Coins from "../Coin.js/Coins";
const CoreUseDefi = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    useEffect(()=> {
        axios.get(url).then((response)=> {
            setCoins(response.data)
            console.log(response.data[0])

        }).catch((error)=> {
            console.log(error)
        })
    },[])


    const handleChange = (e) => {
        const {value} = e.target
        setSearch(value)
    }
    const filteredCoins = coins.filter((coin)=> 
        coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLocaleLowerCase())
    )

    return (
        <div className="coin-app">
            <div className="use-defi-container">

            <div className="coin-search">
                <h1 className="coin-text">Search a currency</h1>
                <div className="form-controll">
                    <form>
                        <input type="text" placeholder="Search a coin" 
                        className="coin-input"
                        onChange={handleChange}/>
                    </form>
                </div>

            </div>
                {filteredCoins.map((coin=>{
                    return(
                        <Coins
                         key={coin.id} 
                         name={coin.name}
                         price={coin.current_price} 
                         image ={coin.image}
                         symbol={coin.symbol}
                         volume={coin.market_cap}
                         priceChange={coin.price_change_percentage_24h}
                         marketcap={coin.total_volume}
                         />
                    )
                }))}

            </div>

        </div>
    )
}

export default CoreUseDefi;
