module.exports = function(opt, cb){
  if(!cb){
    return cb(new Error("No parameters supplied"));
  }
  if(opt.time){
    opt.datetime = (+opt.time)/1000;
    delete opt.time;
  }
  this.request('schedulebystop', opt, function(err, data){
    if(err){
      return cb(err);
    }
    return cb(err, data);
  });
};
