
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

  // Emits new event to a single connection
  // socket.emit('newMessage', {
  //   from: 'server@redek.me',
  //   text: 'Server welcomes you',
  //   createdAt: 'right now'
  // });

  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chat app'
  });

  socket.broadcast.emit('newMessage', {
      from: 'Admin',
      text: 'New user joined',
      createdAt: new Date().getTime()
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    // Emits new event to every single connection
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });

    // Broadcasting is the term for emitting an event for everybody but one
    // socket.broadcast.emit('newMessage', {
    //     from: message.from,
    //     text: message.text,
    //     createdAt: new Date().getTime()
    // });
  });



  socket.on('disconnect', () => {
    console.log('User was disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
