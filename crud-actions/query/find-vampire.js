const mongoose = require('mongoose')
const Vampire = require('../../models/vampires')

const URI = 'mongodb://127.0.0.1/mongoose-crud'

mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', function() {
    const filter = {
        gender: 'f'
    }
    Vampire.find(filter)
        .then(console.log)
        .catch(console.error)
        .finally(() => db.close())
})