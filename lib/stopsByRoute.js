var lib = require('./lib');
module.exports = function(routeID, cb){
  if(!cb){
    return cb(new Error("No routeID supplied"));
  }
  this.request('stopsbyroute', {route:routeID}, function(err, data){
    if(err){
      return cb(err);
    }
    if(!data.direction){
      return cb("Route information returned in incorrect format; are parameters valid?");
    }
    lib.transformDirections(data.direction);
    return cb(err, data.direction);
  });
};
