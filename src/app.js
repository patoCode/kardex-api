const express = require('express')
const app = express()
const morgan = require('morgan')
require('./database')

// MIDDLEWARE

app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: false
  }))

//ROUTES
app.use(require('./routes'))

//START
app.listen(3000, () => {
	console.log("EN EL PUERTO 3000")
})