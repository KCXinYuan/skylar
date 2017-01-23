var mongoose = require('mongoose');

// if running locally
var dbURI = 'mongodb://localhost/skylar';

// if running on heroku
if (process.env.NODE_ENV === 'production'){
    dbURI = process.env.MONGOLAB_URI;
}

var mainDB = mongoose.createConnection(dbURI);

mainDB.on('connected', function(){
    console.log('Mongoose connected to ' + dbURI);
});

mainDB.on('error', function(err){
    console.log('Mongoose connection error: ' + err);
});

mainDB.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

// to close mongoose connection when application closes
var gracefulShutdown = function(msg, callback){
    // close mongoose connection, passing through an
    // anonymous function to run when closed
    mainDB.close(function(){
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};


// listen for SIGUSR2, for nodemon
process.once('SIGUSR2', function(){
    gracefulShutdown('nodemon restart', function(){
        process.kill(process.pid, 'SIGUSR2');
    });
});

// listen for SIGINT emitted on application termination
process.on('SIGINT', function(){
    gracefulShutdown('app termination', function(){
        process.exit(0);
    });
});

// listen for SIGTERM emitted when Heroku shuts down process
process.on('SIGTERM', function(){
    gracefulShutdown('heroku app shutdown', function(){
        process.exit(0);
    });
});

module.exports = mainDB;
