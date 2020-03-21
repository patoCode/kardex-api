const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kardex',{
	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
})
	.then(db => console.log('DB OK'))
	.catch(err => console.error(err));