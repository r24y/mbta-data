var lib = {};

lib.transformStops = function(stops){
  var stop, nuStop;
  for(var i=0;i<stops.length;i++){
    stop = stops[i];
    nuStop = {
      id: stop.stop_id,
      name: stop.stop_name,
      lat: stop.stop_lat,
      lon: stop.stop_lon,
      distance: stop.distance,
      order: stop.stop_order
    };
    if(stop.parent_station.length){
      nuStop.parentStation = {
        name: stop.parent_station_name,
        id: stop.parent_station
      };
    }
    stops[i] = nuStop;
  }
};

lib.transformDirections = function(dirs){
  var dir, nuDir;
  for(var i=0;i<dirs.length;i++){
    dir = dirs[i];
    nuDir = {
      id: dir.direction_id,
      name: dir.direction_name,
      stops: dir.stop.slice(0)
    };
    lib.transformStops(nuDir.stops);
    dirs[i] = nuDir;
  }
}

module.exports = lib;
