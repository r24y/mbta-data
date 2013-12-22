var assert = require("assert");

describe("Server time", function(){
  var mbta;
  before(function(){
    mbta = require('./unitSetup');
  });
  it("should fetch server time", function(next){
    mbta.serverTime(function(err, time){
      assert.ifError(err);
      assert(time.getDate && time.toUTCString, "Server time should be returned as a Date");
      assert(Math.abs(+time - (+new Date)) < 60*1000, "MBTA server time should be pretty close to our clock");
      next();
    });
  });
});
