module.exports = function(type, cb){
  if(!cb){
    cb = type;
    type = null;
  }
  this.request('routes', {}, function(err, data){
    if(err){
      return cb(err);
    }
    if(!data.mode){
      return cb(new Error("Route data returned in unfamiliar structure"));
    }
    data = data.mode;
    if(type==null){
      return cb(null, data);
    }
    if(isNaN(type)){
      return cb(new Error("Type must be a number"));
    }
    var mode;
    for(var i=0;i<data.length;i++){
      mode = data[i];
      if(type == mode.route_type){
        if(!mode.route){
          return cb(new Error("Route data returned in unfamiliar structure"), data);
        }
        return cb(null, mode.route);
      }
    }
    return cb(new Error("Unrecognized route type"), data);
  });
};
