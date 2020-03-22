const router = require('express').Router()
const Item = require('../models/Item')
const Historico = require('../models/Historico')

router.get('/api/',async (req, res)=>{
	const items = await Item.find().sort({lastbuy:'desc'})
	res.json({
		status: 'success',
		body:items
	})
})
router.post('/api/add', async (req, res) => {	
	const newItem = new Item(req.body.item)
	const itemBBDD = await newItem.save()
	res.json({
		status: 'success',
		body: itemBBDD
	})
})
router.post('/api/weigh', async (req, res) => {
	const {id, price, qty} = req.body
	const itemBBDD = await Item.findOne({"_id":id})	

	// MODIFIDY VALUES
	const totalQty =  itemBBDD.qty+qty
	const buyPrice = price * qty
	const stockPrice = itemBBDD.price * itemBBDD.qty
	const weighPrice = ((buyPrice + stockPrice) / totalQty).toFixed(2)

	//REGISTRY HISTORICO
	const historico = {
		item: itemBBDD._id,
		newPrice: price,
		oldPrice: itemBBDD.price,
		weighPrice: weighPrice,
		qty: qty,
		stockQty: itemBBDD.qty,		
		totalqty: totalQty
	}
	const newHistorico = new Historico(historico)
	const historicoBBDD = await newHistorico.save()

	// EDIT ITEM PRICE
	const updateItem = await Item.updateOne({"_id":id},{"qty":totalQty, "price": weighPrice, "weighDate": historicoBBDD.reg})
	res.json(updateItem)
})
router.get('/api/item/:id', async (req, res) => {
	const id = req.params.id
	const itemBBDD = await Item.findOne({"_id":id})	
	res.json({
		status:'success',
		body: itemBBDD
	})
})
router.get('/api/item/history/:id', async (req, res) => {
	const id = req.params.id
	const historico = await Historico.find({"item":id}).sort({_id: -1})	
	res.json({
		status:'success',
		body: historico
	})
})
module.exports = router