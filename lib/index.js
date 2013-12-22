var request = require('request');

var MBTA = function(key){
  this._key = key;
};

MBTA.prototype.request = function(service,params, cb){
  var opt = {
    headers: {
      "Accept":"application/json"
    },
    url: "http://realtime.mbta.com/developer/api/v1/"+service,
    qs: params
  };
  opt.qs.api_key = this._key;
  request(opt, function(err, m, body){
    if(err){
      return cb(err);
    }
    try{
      body = JSON.parse(body);
      cb(null, body);
    }catch(err){
      return cb(err);
    }
  });
};

MBTA.prototype.getServerTime = require('./serverTime');
MBTA.prototype.getRoutes = require('./routeList');
MBTA.prototype.getStopsByRoute = require('./stopsByRoute');

module.exports = MBTA;
