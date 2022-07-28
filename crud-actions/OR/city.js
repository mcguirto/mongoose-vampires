const mongoose = require('mongoose')
const Vampire = require('../../models/vampires')

const URI = 'mongodb://127.0.0.1/mongoose-crud'

mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', function() {
    Vampire.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]})
        .then(console.log)
        .catch(console.error)
        .finally(() => db.close())
})