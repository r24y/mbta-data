var assert = require("assert");

describe("Stops by location", function(){
  var mbta;
  before(function(){
    mbta = require('./unitSetup');
  });
  it("should fetch stops", function(next){
    mbta.getStopsByLocation([42.349378,-71.083781], function(err, stops){
      assert.ifError(err);
      assert(stops.length, "No information returned");
      assert(stops[0].name && stops[0].id && stops[0].lat && stops[0].lon, "First stop in list missing typical information");
      next();
    });
  });
});
