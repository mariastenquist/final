// Include our Model
var User = require('../models/rides')

// Create a NEW User
var createRide = function(req, res){
	// Data from a POST request lives in req.body

	var newRide = new Ride({

		start				: req.body.start,
		destination			: req.body.destination,
		date				: req.body.date,
		departure			: req.body.departure,
		arrival				: req.body.arrival,
		offer				: req.body.offer,
		username			: req.body.username,

	})

	newRide.save( function(err, doc){
		res.send(doc)
	})

}

module.exports = {
	createRide : createRide,
	
}
