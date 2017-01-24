var mongoose = require('mongoose');
var Location = (require('../models/schemas')).location;

module.exports = {
    find: function(resource, callback){
        Location.find({}, function(err, data){
            if (err){
                callback(err, null);
            } else if (!data){
                callback(null, null);
            } else {
                callback(null, data);
            }
        });
    },

    findById: function(resource, params, callback){
        Location.find(params, function(err, data){
            if (err){
                callback(err, null);
            } else if (!data){
                callback(null, null);
            } else {
                callback(null, data);
            }
        });
    },

    create: function(params, callback){
        Location.create(params, function(err, data){
            if (err){
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    }
}
