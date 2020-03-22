const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
	name:{ type: String, required: true },
	description:{ type: String, required: true },
	status:{ type: String, default: false},
	price:{ type: Number, default: 0},
	qty:{ type: Number, default: 0},
	oldPrice:{ type: Number, default: 0},
	weighDate:{ type: Date, default: Date.now}
});

module.exports = model('Item', itemSchema);
