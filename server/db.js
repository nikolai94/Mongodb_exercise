var mongoose = require( 'mongoose' );

var dbURI;

dbURI = 'mongodb://localhost/mongo_exercise';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
    global.mongo_error = "Not Connected to the Database";
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

//Date, MatchDay, Result
var tweets = new mongoose.Schema({
    polarity : {type: Number},
    id: {type: Number, unique: true},
    date: {type: String},
    query: {type: String},
    user: {type: String},
    text:{type: String}
});

mongoose.model( 'Tweets', tweets);





