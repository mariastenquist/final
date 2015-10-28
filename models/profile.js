
var mongoose = require('mongoose');

// Define our Schema for the DB

var userSchema = mongoose.Schema({

	// firstName		: {type : String},
	// lastLame		: {type : String},
	username		: {type : String},
	password		: {type : String},
	birthYear		: {type : Number}, //18 or older. Drop down menu of years?
	zipcode			: {type : Number},
	profilePic		: {type : String},  // url pointing to the photo
	ratings			: {type : Number}, //stars
	reviews			: {type : [String]}, //


});


// Being modelling the collection
module.exports = mongoose.model('profile', userSchema);