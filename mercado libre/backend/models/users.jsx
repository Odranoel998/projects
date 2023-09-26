// eslint-disable-next-line no-undef
const mongoose = require('mongoose')
// eslint-disable-next-line no-undef
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    username:{
        type: 'string',
        required: true,
        unique:true
    },
    email:'string',
    passwordHash:'string',
    numberPhone: Number,
    legalEntity: Boolean,
});

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })
  
  const User = mongoose.model('User', userSchema)

  // eslint-disable-next-line no-undef
  module.exports = User