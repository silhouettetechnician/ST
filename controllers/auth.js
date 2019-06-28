const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res){
    User.create(req.body).then(user => {
        const token = jwt.sign({ sub: user._id}, secret, { expiredIn: '6h'})
        res.json({
            message: `Thanks for registering ${user.username}`,
            token,
            user
        })
    })
    .catch(err => res.json(err))
}

function login(req, res) {
    User.findOne({ email: req.body.email }).then(user => {
        if(!user || !user.validatePassword(req.body.password)){
            return res.status(401).json({ message: 'Unauthorized'})
        }

        const token = jwt.sign({ sub: user._id}, secret, { expiresIn: '6h'})
        res.json({
            message: `Welcome back ${user.username}`,
            token,
            user
        })
    })
    .catch(err => res.json(err))
}

module.exports = {
    register,
    login
}