const { Router } = require('express')
const router = Router()

const Transaction = require('../models/Transaction')

router.post('/transaction', async (req, res) => {
    try {
        const {fromWallet, toWallet, network,sellCoin,buyCoin} = req.body;

        const transaction = new Transaction({
            fromWallet,
            toWallet,
            network,
            sellCoin,
            buyCoin,
        })

        await transaction.save()
        res.status(201).json({message:'Transaction saved'})
        
    } catch (error) {
        console.log(error)
    }
})


module.exports = router