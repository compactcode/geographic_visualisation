var express = require('express');

var app = express.createServer();
var io  = require('socket.io').listen(app);

app.use(express.static(__dirname + '/public'));

app.listen(3000);

io.sockets.on('connection', function (socket) {

  var events = [
    { id: 1, latitude: 144.963056, longitude: -37.813611, amount: "$54.36" },
    { id: 2, latitude: 151.20689,  longitude: -33.873651, amount: "$100.56" },
    { id: 3, latitude: 153.023502, longitude: -27.470933, amount: "$689.72" },
    { id: 4, latitude: 115.857339, longitude: -31.952854, amount: "$201.09" },
    { id: 5, latitude: 138.599945, longitude: -34.928726, amount: "$156.21" },
    { id: 6, latitude: 122.244327, longitude: -17.951221, amount: "$104.11" },
    { id: 7, latitude: 130.841769, longitude: -12.46282,  amount: "$93.99"  }
  ];

  socket.emit('event', events.shift());

  setInterval(function() {
    if(events.length > 0) {
      socket.emit('event', events.shift());
    }
  }, 10000);

});

