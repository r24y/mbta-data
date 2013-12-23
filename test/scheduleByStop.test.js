var assert = require("assert");

describe("Schedule by stop", function(){
  var mbta;
  before(function(){
    mbta = require('./unitSetup');
  });
  it("should fetch schedule", function(next){
    var params = {
      stop: '70070'
    };
    mbta.getScheduleByStop(params, function(err, stops){
      assert.ifError(err);
      next();
    });
  });
  it("should complain; invalid stop ID", function(next){
    var params = {
      stop: 'ooga booga'
    };
    mbta.getScheduleByStop(params, function(err, stops){
      assert(err);
      next();
    });
  });
});
