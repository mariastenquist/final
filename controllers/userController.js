// Include our Model
var User = require('../models/profile')

// Create a NEW User
var createUser = function(req, res){
	// Data from a POST request lives in req.body

	var newUser = new User({


		username			: req.body.username,
		password			: req.body.password,
		birthYear			: req.body.birthYear,
		zipcode				: req.body.zipcode,
		profilePic			: req.body.profilePic,
		ratings				: req.body.ratings,
		reviews				: req.body.reviews.split(', '),
	})

	newUser.save( function(err, doc){
		res.send(doc)
	})

}

module.exports = {
	createUser : createUser,
	
}



