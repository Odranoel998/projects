console.log('Init Backend')
// eslint-disable-next-line no-undef
const express = require('express')
// eslint-disable-next-line no-undef
const cors = require('cors');
const app = express()
//------------------------------------------------------------------------------
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }

//------------------------------------------------------------------------------

app.use(express.json())
app.use(requestLogger)
app.use(cors())