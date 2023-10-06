console.log('init product')
import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const productSchema = mongoose.Schema({
    name:String,
    date:Date,
    img:String,
    precio:Number
})

productSchema.plugin(uniqueValidator)

productSchema.set('toJson',{
    transform:  (document, returnedObject)=>{
        returnedObject.id= returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // the passwordHash should not be revealed
        delete returnedObject.passwordHash
    }
})

const Product = mongoose.model('Product',productSchema)

export default Product;