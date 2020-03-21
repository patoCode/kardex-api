const { Schema, model } = require('mongoose');

const historicoSchema = new Schema({
	item:{ type: int, required: true },
	newPrice:{ type: Number, default: 0},
	qty:{ type: Number, default: 0},
	oldPrice:{ type: Number, default: 0},
	reg:{ type: Date, default: Date.now}
});

module.exports = model('Historico', historicoSchema);
