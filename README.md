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

### getServerTime(callback)

Callback responds with `(error, serverTime)` with `serverTime` as a Date object.

### getRoutes(callback)

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

### getRoutes(mode, callback)

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

### getStopsByRoute(routeID, callback)
Get a list of stops for the route with the given ID.

Callback responds with `(err, directions)` where `directions` takes the form:

```
[
  {
    id: "0",
    name: "Southbound",
    stops: [
      {
        order: "1",
        id: "70061",
        name: "Alewife Station Red Line",
        lat: "42.3954277038574",
        lon: "-71.1424865722656",
        parentStation: {
          name: "Alewife Station",
          id: "place-alfcl"
        }
      },
      { ... },
      ...
    ]
  },
  { ... },
  ...
]
```

### getStopsByLocation(location, callback)

Get a list of the closest stops to the given location. `location` is a two-element array containing `[latitude, longitude]`.

Callback responds with `(err, stops)` where `stops` takes the form:

```

```

### getScheduleByStop(params, callback)

Get a list of next scheduled arrivals by stop. `params` takes the following form:
```
{
  stop:      "[required] stop ID",
  route:     "[optional] route ID",
  direction: "[optional] direction ID",
  time:      "[optional] Date object indicating when to start looking"
}
```

Callback gets called with `(err, data)` where `data` takes the form:
```
{
  "stop_id": "70070",
  "stop_name": "Central Sq - Outbound",
  "mode": [
    {
      "route_type": "1",
      "mode_name": "Subway",
      "route": [
        {
          "route_id": "931_",
          "route_name": "Red Line",
          "direction": [
            {
              "direction_id": "1",
              "direction_name": "Northbound",
              "trip": [
                {
                  "trip_id": "20834706",
                  "trip_name": "8:22 am from Ashmont Station Red Line Inbound to Alewife Station Red Line",
                  "sch_arr_dt": "1387806720",
                  "sch_dep_dt": "1387806720"
                },
                {
                  "trip_id": "20834707",
                  "trip_name": "8:30 am from Ashmont Station Red Line Inbound to Alewife Station Red Line",
                  "sch_arr_dt": "1387807200",
                  "sch_dep_dt": "1387807200"
                },
                {
                  "trip_id": "20834708",
                  "trip_name": "8:39 am from Ashmont Station Red Line Inbound to Alewife Station Red Line",
                  "sch_arr_dt": "1387807740",
                  "sch_dep_dt": "1387807740"
                }
              ]
            }
          ]
        },
        {
          "route_id": "933_",
          "route_name": "Red Line",
          "direction": [
            {
              "direction_id": "1",
              "direction_name": "Northbound",
              "trip": [
                {
                  "trip_id": "20834889",
                  "trip_name": "8:16 am from Braintree Station Red Line Platform to Alewife Station Red Line",
                  "sch_arr_dt": "1387806960",
                  "sch_dep_dt": "1387806960"
                },
                {
                  "trip_id": "20834890",
                  "trip_name": "8:24 am from Braintree Station Red Line Platform to Alewife Station Red Line",
                  "sch_arr_dt": "1387807440",
                  "sch_dep_dt": "1387807440"
                },
                {
                  "trip_id": "20834891",
                  "trip_name": "8:33 am from Braintree Station Red Line Platform to Alewife Station Red Line",
                  "sch_arr_dt": "1387807980",
                  "sch_dep_dt": "1387807980"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
    ✓ should fetch s
```
