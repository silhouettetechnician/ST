const mongoose = require('mongoose')


const productSchema =
 new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: {type: Number, required: true },
  colors: { type: Array},
  image: { type: Array }
})

module.exports = mongoose.model('Product', productSchema)
