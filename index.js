var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var config = require('./config.json');

server.listen(8080);

/*
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
*/


// server-side
io.on("connection", (socket) => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    io.emit('pppp',{});
});