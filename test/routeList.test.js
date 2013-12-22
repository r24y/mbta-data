var assert = require("assert");

describe("Route list", function(){
  var mbta;
  before(function(){
    mbta = require('./unitSetup');
  });
  it("should fetch all modes of transportation", function(next){
    mbta.getRoutes(function(err, modes){
      assert.ifError(err);
      assert(modes.length, "No information returned");
      assert(modes[0].route_type, "No route_type specified ");
      assert(modes[0].mode_name, "No mode_name specified");
      assert(modes[0].route && modes[0].route.length, "No routes listed");
      next();
    });
  });
  it("should fetch all subway routes", function(next){
    mbta.getRoutes(0,function(err, routes){
      assert.ifError(err);
      assert(routes.length, "No routes returned");
      assert(routes[0].route_id, "No route_id returned");
      assert(routes[0].route_name, "No route_name returned");
      next();
    });
  });
  it("should return error for invalid route type", function(next){
    mbta.getRoutes(27, function(err, routes){
      assert(err);
      next();
    });
  });

});
