const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

let port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('createMessage', (message) => {
    console.log('New message', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });
});



server.listen(port, () => {
  console.log(`Server is started at port ${port}`);
});

