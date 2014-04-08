var stopsByMode = require('./stopsByMode');
var async = require('async');
var _ = require('lodash');

module.exports = function(modes, cb){
    if(!cb){
        cb = modes;
        modes = [0,1,2,3,4];
    }
    var self = this;
    var funky = function(mode){
        return _.wrap(mode, stopsByMode.bind(self));
    }
    async.parallel(modes.map(funky), function(err, stops){
        if(err){
            return cb(err);
        }
        return cb(null, _.flatten(stops).sort(function(a,b){return a.name>b.name?1:-1}));
    });
};
