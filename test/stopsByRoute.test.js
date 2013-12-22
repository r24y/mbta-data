var assert = require("assert");

describe("Stops by route", function(){
  var mbta;
  before(function(){
    mbta = require('./unitSetup');
  });
  it("should fetch all stops for Red Line", function(next){
    mbta.getStopsByRoute("931_", function(err, directions){
      assert.ifError(err);
      assert(directions.length, "No information returned");
      next();
    });
  });
  it("should complain when you give an invalid ID", function(next){
    mbta.getStopsByRoute("ooga booga", function(err, data){
      assert(err);
      next();
    });
  });

});
