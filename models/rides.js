//place constructor/factory/service here


var mongoose = require('mongoose');

// Define our Schema for the DB

var rideSchema = mongoose.Schema({

	// firstName		: {type : String},
	// lastLame		: {type : String},

	start			: {type : String},
	destination		: {type : String},
	date			: {type : Array}, //is this number, string?
	departure		: {type : Number}, //string? array?
	arrival			: {type : Number},
	offer           : {type : Boolean}
	username		: {type : String},



});

Ride.find({destination : req.body.destination, offer : true}, function(data){
	res.send(data)
})

// Being modelling the collection
module.exports = mongoose.model('ride', userSchema);