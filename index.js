

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const { PORT, dbURI } = require('./config/environment')
const router = require('./config/routes')


const app = express()
mongoose.connect(dbURI,
{ useNewUrlParser: true })

app.use(bodyParser.json())
// app.use(express.static(`${__dirname}/dist`))

app.use('/api', router)
app.get('/*', (req, res) => res.sendFile('src/index.html', { root: __dirname }))

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`))



