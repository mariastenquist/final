
// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: '/public/images/avatars/' });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/<nameofdatabase>')

// Create Express App Object \\
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// Routes \\


app.get('/', function(req, res){
	// res.send('Hello')
  res.sendFile('/html/master.html', {root : './public'})
});

app.get('/api/users', function(req, res){

	res.send('This is working')
})

app.use(multer())
//req files --update profiles 

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
var upload = multer().single('avatar')

app.post('/users', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
    	alert("An error occured. Please re-upload your profile picture.")
      // seAn error occurred when uploading
      return
    }
    // Everything went fine
  })
})



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});



