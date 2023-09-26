import mongoose from 'mongoose';

const username = encodeURIComponent("fullstack");
const password = encodeURIComponent("u3HBMmwIT1SbyIPp");
const cluster = encodeURIComponent ("cluster0");

const url =
  `mongodb+srv://${username}:${password}@${cluster}.pjyaqvk.mongodb.net/noteapp?retryWrites=true`

  console.log('connecting to ', url)



mongoose.connect(url)

  // eslint-disable-next-line no-unused-vars
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

  const noteSchema = new mongoose.Schema({
    content: {
      type: String,
      minlength: 5,
      required: true
    },
    important: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  })

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


// eslint-disable-next-line no-undef
module.exports = mongoose.model('Note', noteSchema)