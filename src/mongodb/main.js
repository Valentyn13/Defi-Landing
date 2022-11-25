//Все пакеты нужно установить через npm
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json())


app.listen(PORT, () => console.log(`App is running on port: ${PORT}`))