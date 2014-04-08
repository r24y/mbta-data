var stopsByModes = require('./stopsByModes');
var _ = require('lodash');

module.exports = function(modes, cb){
    stopsByModes.bind(this)(modes, function(err, stops){
        if(err){
            return cb(err);
        }
        return cb(null, _(stops).groupBy(function(s){
            return s.parentStation.id;
        }).map(function(s){
            return {
                stationName: s[0].parentStation.name,
            id: s[0].parentStation.id,
            stops: s
            }
        }).valueOf());
    });
}
