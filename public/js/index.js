let socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'jane',
    text: 'Hey there'
  });

});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(msg) {
  console.log('New Message: ', msg);
});