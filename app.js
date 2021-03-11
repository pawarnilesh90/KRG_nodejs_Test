var express = require('express');
var bodyParser = require('body-parser');

var movieRoutes = require('./routes/movieRoutes'); // Imports routes for the movie
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://adminUser:testAdmin@cluster0.wpcn7.mongodb.net/movieDetails?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/v1', movieRoutes);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});