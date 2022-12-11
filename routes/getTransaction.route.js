const { Router } = require('express')
const router = Router()
const transaction = require('../models/Transaction')

router.get('/getTransactions', async (req, res) => {
    try {
        await transaction.find((err, value) =>{
            if (err) throw new Error(err.message)
            res.json(value)
        })
    } catch (error) {
        console.log(error)
    }
})


module.exports = router