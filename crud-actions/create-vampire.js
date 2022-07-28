const mongoose = require('mongoose')
const Vampire = require('../models/vampires')

const URI = 'mongodb://127.0.0.1/mongoose-crud'

mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', function () {
	const firstVampire = 
    [
        {
        name: 'Ash',
        hair_color: 'black',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'f',
        victims: 2
      },{
        name: 'Neptune',
        dob: new Date(937, 0, 24, 13, 0),
        hair_color: 'brown',
        eye_color: 'blue',
        loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
        location: 'Transylvania, Romania',
        gender: 'm',
        victims: 1238
      },{
        name: 'Stacy ',
        dob: new Date(1560, 8, 7, 22, 10),
        hair_color: 'brown',
        eye_color: 'brown',
        loves: ['virgin blood', 'fancy cloaks','frilly collars'],
        location: 'Nyírbátor, Hungary',
        gender: 'f',
        victims: 980
      },{
        name: 'Lenin',
        dob: new Date(1760, 11, 9, 18, 44),
        hair_color: 'black',
        eye_color: 'blue',
        loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
        location: 'Auvergne, France',
        gender: 'm',
        victims: 324
      }
      ]
      
	Vampire.create(firstVampire)
		.then(console.log)
		.catch(console.error)
		.finally(() => db.close())
})
