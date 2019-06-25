

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')

const { PORT, dbURI } = require('./config/environment')

const app = express()
const router = require('./config/routes')

mongoose.connect(dbURI,
    { useNewUrlParser: true })

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`))

app.use(bodyParser.json())

app.use('/api', router)