const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { dbURI } = require('../config/environment')
const Product = require('../models/product')

mongoose.connect(dbURI, {useNewUrlParser: true }, (err, db) => {
    db.dropDatabase()

    Product.create([
        {
            name: 'Drury Boxer Shorts',
            description: 'Sea Island Cotton boxers',
            price: "19.99"

        },
        {
            name: 'Captain t shirt',
            description: 'Holy Fuck',
            price: "20"
        }
    ])
    .then(products => console.log(`${products.length} products created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
