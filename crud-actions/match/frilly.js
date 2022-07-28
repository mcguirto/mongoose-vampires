const mongoose = require('mongoose')
const Vampire = require('../../models/vampires')

const URI = 'mongodb://127.0.0.1/mongoose-crud'

mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', function() {
    Vampire.find({$or : [
        {$or: [{loves: 'frilly shirtsleeves'}, {loves: 'frilly collars'}]},
        {loves: 'brooding'},
        {$or: [{loves: 'appearing innocent'},{loves: 'lurking th rotting mansions'},{loves: 'R&B music'}]},
        {$and: [{loves: 'fancy cloaks'}, {loves: {$nin:['top hats', 'virgin blood']}}]}
    ]})
        .then(console.log)
        .catch(console.error)
        .finally(() => db.close())
})