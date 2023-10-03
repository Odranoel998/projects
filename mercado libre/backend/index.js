console.log('Init Backend')

import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import usersRouter from './controllers/users.js';



//------------------------------------------------------------------------------

const app = express()
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }
mongoose.set('strictQuery',false)
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

//----------------------------------------------------------------------------------------------------------------
app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
app.use("/api/users", usersRouter)
app.use(requestLogger)


//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------


// eslint-disable-next-line no-undef
const PORT= process.env.PORT
app.listen(PORT,()=>{
  console.log(`server running on port ${PORT}`)
})