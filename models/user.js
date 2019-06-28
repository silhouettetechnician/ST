const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// setting up new schema model
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true, trim: true}
})

// making a field to see if the passwords match
userSchema.virtual('passwordConfirmation').set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
})
// we now run a method to check if the hash is the same as the one they sent to us. so new user Schema.methods.validate password. by returning bcrypt.compareSync with password and the password the user uses. we compare the two and either give the user a token or disallow the user access.
userSchema.methods.validatePassword = function validatePassword(password) {
    return bcrypt.compareSync(password, this.password)
  }


// checking if the password and password confirmation match
userSchema.pre('validate', function checkPassword(next){
    if(!this.isModified('password') && this._passwordConfirmation !== this.password) {
        this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
})
// creating 8 hashed and encrypting the password
userSchema.pre('save', function hashPassword(next){
    if (this.isModified('password')){
        this.password = bcrypt.hashSync(this.password,
        bcrypt.genSaltSync(8))
    }
    next()
})

userSchema.plugin(require('mongoose-unique-validator'))

// any time my user model is requested i want to remove the password from what is sent back
userSchema.set('toJSON', {
    transform(doc, json) {
        delete json.password
        return json
    }
})

// export our user model using userSchema to the model
module.exports = mongoose.model('User', userSchema)