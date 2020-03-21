const express = require('express')
const app = express()
const morgan = require('morgan')
require('./database')

// MIDDLEWARE
app.use(require('./routes'))
app.use(morgan('dev'))

//START
app.listen(3000, () => {
	console.log("EN EL PUERTO 3000")
})