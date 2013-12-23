module.exports = function(opt, cb){
  if(!cb){
    return cb(new Error("No options supplied"));
  }
  if(!opt.stop){
    return cb(new Error("No stop ID specified"));
  }else if(!opt.route){
    return cb(new Error("No route ID specified"));
  }else if(!opt.direction){
    return cb(new Error("No direction ID specified"));
  }
  this.request('schedulebystop', params, function(err, data){
    if(err){
      return cb(err);
    }
    console.log(data);
    return cb(err, data);
  });
};
