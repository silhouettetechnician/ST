const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: {type: Number, required: true },
    colors: { type: Array},
    images: { type: Array }
})

module.exports = mongoose.model('Product', productSchema)