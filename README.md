# MBTA Data

Simple interface with MBTA's realtime and schedule data

```
var MBTA = require('mbta-data');
var mbta = new MBTA('your-developer-key');
```

## License

[![GPL v3](http://www.gnu.org/graphics/gplv3-88x31.png)](http://www.gnu.org/licenses/gpl.html)

This library is released under the terms of the [GNU GPL](http://www.gnu.org/licenses/gpl.html). For more details, see LICENSE.

## Methods

### getServerTime(cb)

Callback responds with `(error, serverTime)` with `serverTime` as a Date object.

### getRoutes(cb)

Fetch a list of all modes of transport.

Callback responds with `(err, modes)` where `modes` takes the form:

```
[
  {
    route_type: "0",
    mode_name: "Subway",
    route: [
      {
        route_id: "810_",
        route_name: "Green Line"
      },
      { ... },
      ...
    ]
  },
  { ... },
  ...
]
```

### getRoutes(mode, cb)

Fetch a list of routes. Mode is an integer that selects the mode of transportation.

 * 0 - Light rail/streetcar
 * 1 - Subway
 * 2 - Commuter rail
 * 3 - Bus
 * 4 - Boat

Callback responds with `(err, routes)` where `routes` takes the form:

```
[
  {
    route_id: "810_",
    route_name: "Green Line"
  },
  { ... },
  ...
]
```
