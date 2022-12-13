const { Schema, model} = require('mongoose')

const TransactionSchema = new Schema({
    fromWallet: Number,
    toWallet: Number,
    network: String,
    sellCoin: Object,
    buyCoin: Object,
})

// sellCoinName: String,
// sellCoinSymbol: String,
// sellCoinAmount: Number,
// priceOfSellCoin: Number,
//priceOfTransaction:Number

//buyCoinName: String
//buyCoinSymbol: String
//buyCoinAmount: Number
//priceOfBuyCoin: Number


module.exports = model('Transaction',TransactionSchema,"Defi")