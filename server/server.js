
const path        = require('path');
const http        = require('http');
const publicPath  = path.join(__dirname, '/../public');

const express     = require('express');
const socketIO    = require('socket.io');

const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  socket.emit('newMessage', {
    from: 'server@redek.me',
    text: 'Server welcomes you',
    createdAt: 'right now'
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
