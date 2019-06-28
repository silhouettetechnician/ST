const router = require('express').Router()
const products = require('../controllers/products')
const auth = require('../controllers/auth')

router.route('/products')
.get(products.index)
.post(products.create)

router.route('/products/:id')
.get(products.show)

router.post('/register', auth.register )
router.post('/login', auth.login )

module.exports = router