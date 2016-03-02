
// Initialize express
var express = require('express');
var app = express();

// Initialize a new instance of socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// Socket
/* 
  Listen on the connection event for 
  incoming sockets, and log to the console.
*/
io.on('connection', function(socket){
  console.log('a user connected');
});

// Where to find the game
app.listen(app.get('port'), function() {
  console.log('Game is running on port', app.get('port'));
});