var mongoose = require('mongoose');
var mainDB = require('./db');

var locationSchema = mongoose.Schema({
    googleMapsId: {type: String, required: true},
    events: {type: [String], required: false, default: []},
    // chat logs
    currentUsers: {type: [userSchema], required: false, default: []}
});

var userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    // hashed password
    profilePicture: {type: Buffer, required: false},
    history: {type: [activitySchema], required: false, default: []}
});

var activitySchema = mongoose.Schema({
    activityType: {type: String, required: true},
    timeStamp: {type: Date, required: true, default: Date.now},
    activityText: {type: String, required: true, default: ""}
});

module.exports = {
    location: mainDB.model('location', locationSchema),
    user: mainDB.model('user', userSchema)
}
