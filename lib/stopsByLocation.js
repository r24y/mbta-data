var lib = require('./lib');
module.exports = function(location, cb){
  if(!cb){
    return cb(new Error("No location supplied"));
  }
  if(!(location[0] && location[1])){
    return cb(new Error("Location must be a 2-element array"));
  }
  this.request('stopsbylocation', {lon:location[1], lat: location[0]}, function(err, data){
    if(err){
      return cb(err);
    }
    if(!data.stop){
      return cb("Stop information returned in incorrect format; are parameters valid?");
    }
    lib.transformStops(data.stop);
    return cb(err, data.stop);
  });
};
