const express = require('express');
const mongoose = require('mongoose');

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json({extended: true}))
app.use('/api/swap',require('./routes/transaction.route'))
app.use('/api/swap', require('./routes/getTransaction.route'))
async function start () {
    try {
        await mongoose.connect('mongodb+srv://Valentyn:Valentyn@clusterdefi.h9rojy8.mongodb.net/Transaction?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server started on port : ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()