const Promise = require('bluebird')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')

function secureRoute(req, res, next){
     // if there is no Authorization header, respond with 401 Unauthorized
    if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized'})
    // get the token out of the Authorization header
    const token = req.headers.authorization.replace('Bearer ', '')
    // create a new promise to verify the token
    new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, payload) => {
            if(err) reject(err)

            resolve(payload)
        })
    })
    // find the user by the user ID in the payload
    .then(payload => User.findById(payload.sub))
    .then(user => {
        // if the user can't be found, respond with 401 Unauthorized
        if (!user) return res.status(401).json({message: 'Unauthorized'})
        // add the user to the `req` object for use in the controllers
        req.currentUser = user
         // go to the destination controller action
        next()
    })
    .catch(err => res.json(err))
}

module.exports = secureRoute