const { Schema, model } = require('mongoose')

const historicoSchema = new Schema({
	item:{ type: String, required: true },
	newPrice:{ type: Number, default: 0}, // precio de EOC
	oldPrice:{ type: Number, default: 0}, // anterior a la EOC
	weighPrice:{ type: Number, default: 0}, // anterior a la EOC
	qty:{ type: Number, default: 0}, // de EOC
	stockQty:{ type: Number, default: 0}, // de EOC
	totalqty:{ type: Number, default: 0}, // mas lo que hay
	reg:{ type: Date, default: Date.now}
}) 

module.exports = model('Historico', historicoSchema)
