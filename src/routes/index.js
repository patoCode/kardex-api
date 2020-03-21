const router = require('express').Router()
const Item = require('../models/Item')
const Historico = require('../models/Historico')

router.get('/',async (req, res)=>{
	const items = await Item.find().sort({lastbuy:'desc'})
	res.json(items)
})
router.get('/add', async (req, res) => {
	const item = {
		name: 'Item1',
		description: 'Dwscripcion de item 1',
		status: 'active',
		price: 152.00,
		qty: 54,
		oldPrice: 151.85
	}
	const newItem = new Item(item)
	await newItem.save()
	res.send('ok')

})
module.exports = router