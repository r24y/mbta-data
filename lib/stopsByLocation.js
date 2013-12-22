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
    var stop, nuStop;
    for(var i=0;i<data.stop.length;i++){
      stop = data.stop[i];
      nuStop = {
        id: stop.stop_id,
        name: stop.stop_name,
        lat: stop.stop_lat,
        lon: stop.stop_lon,
        distance: stop.distance,
      };
      if(stop.parent_station.length){
        nuStop.parentStation = {
          name: stop.parent_station_name,
          id: stop.parent_station
        };
      }
      data.stop[i] = nuStop;
    }
    return cb(err, data.stop);
  });
};
