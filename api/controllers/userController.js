var mongoose = require('mongoose');
var User = (require('../models/schemas')).User;

module.exports = {
    find: function(resource, callback){
        User.find({}, function(err, data){
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
        User.find(params, function(err, data){
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
        User.create(params, function(err, data){
            if (err){
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    },

    update: function(params, callback){
        User.update(params, function(err, data){
            if (err){
                callback(err, null);
            } else {
                callback(null, data);
            }
        });
    },

    delete: function(params, callback){
        User.delete(params, function(err){
            if (err){
                callback(err, null);
            } else {
                callback(null, null);
            }
        });
    }
}
