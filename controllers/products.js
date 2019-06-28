const Product = require('../models/product')

function indexRoute(req, res){
  return Product.find().then(product => res.status(200).json(product)).catch(err => res.json(err))
}

function createRoute(req, res, next){
    return Product.create(req.body).then(product => res.status(201).json(product)).catch(next)
}

function showRoute(req, res){
    return Product.findById(req.params.id).then(product => {
        if (!product) return res.status(404).json({ message: 'Not found'})
        res.status(200).json(product).catch(err => res.json(err))
    })
}

function updateRoute(req, res){
    return Product.findById(req.params.id).then(product => {
        if (!product) return res.status(400).json({ message: 'Not found'})
        Object.assign(product, req.body)
        return product.save
    })
    .then(product => res.status(202).json(product))
    .catch(err => res.json(err), res.status(422))
}

function destroyRoute(req, res){
    return Product.findById(req.params.id).remove().then(() => res.status(202).end('OK')).catch(err => res.json(err))
}

module.exports = {
    index: indexRoute,
    create: createRoute,
    show: showRoute,
    update: updateRoute,
    break: destroyRoute
}