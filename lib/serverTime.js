module.exports = function(cb){
  this.request('servertime',{},function(err, data){
    var ts;
    if(err){
      return cb(err);
    }
    if(!data.server_dt){
      return cb(new Error("Server time returned in unfamiliar structure"), data);
    }
    try{
      ts = parseInt(data.server_dt);
      if(!ts) return cb(new Error("Server time not returned as int"));
      cb(null, new Date(ts*1000));
    }catch(err){
      cb(err, data);
    }
  });
};
