var stopsByRoute = require('./stopsByRoute');
var routes = require('./routeList');
var async = require('async');
var _ = require('lodash');

module.exports = function(mode, cb){
    var self = this;
    if(!cb){
        cb = mode;
        return cb(new Error('No mode supplied'));
    }
    routes.bind(this)(mode, function(err, routes){
        // Generate a function that will fetch the given route.
        function fetch(route){
            // The actual function that will be passed into the
            // async.parallel() call.
            return function(next){
                stopsByRoute.bind(self)(route.route_id, function(err, stops){
                    if(err) return next(err);
                    next(null, stops);
                });
            }
        }
        var fn = routes.map(fetch);
        async.parallel(fn, function(err, results){
            if(err){
                return cb(err);
            }
            var stops = _(results).flatten().map(function(r){
                return r.stops;
            }).flatten().valueOf();

            cb(null, _.uniq(stops, function(s){return s.id}));
        });
    });
};
