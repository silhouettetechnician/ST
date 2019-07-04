const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { dbURI } = require('../config/environment')
const Product = require('../models/product')
const User = require('../models/user')

mongoose.connect(dbURI, {useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()

  User.create([
    {
      username: 'markyboy123',
      email: 'mark@hotmail.co.uk',
      password: '21122626bob',
      passwordConfirmation: '21122626bob'
    }])
    .then(user => {


      return Product.create([
        {
          name: 'Shoes',
          description: 'Sea Island Cotton boxers',
          price: '19.99',
          image: ['https://i.imgur.com/L0TyCLT.jpg', 'https://imgur.com/b2azxBO.jpg', 'https://imgur.com/Ctwlksl.jpg']

        },
        {
          name: 'Jacket1',
          description: 'Holy Fuck',
          price: '20',
          image: ['https://imgur.com/vMgtRs4.jpg', 'https://imgur.com/YcicN2D.jpg']
        },
        {
          name: 'coat1',
          description: 'Holy Fuck',
          price: '20',
          image: ['https://imgur.com/rhymEbB.jpg', 'https://imgur.com/1kqX0tm.jpg']
        },
        {
          name: 'Jumper',
          description: 'Lovely job',
          price: '28',
          image: ['https://imgur.com/JKcyLxe.jpg', 'https://imgur.com/Lhao1zt.jpg']
        },
        {
          name: 'Jumper2',
          description: 'Holy Fuck',
          price: '200',
          image: ['https://imgur.com/jah8wYB.jpg']
        },
        {
          name: 'Jacket2',
          description: 'Holy Fuck',
          price: '200',
          image: ['https://imgur.com/q7P3QO6.jpg', 'https://imgur.com/s84i94W.jpg']
        }
      ])
        .then(products => console.log(`${products.length} products created`))
        .catch(err => console.log(err))
        .finally(() => mongoose.connection.close())
    })

})
