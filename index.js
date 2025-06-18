const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.of("/TeenPatti").on('connection', (socket) => {
  console.log(`🟢 Unity Connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`🔴 Disconnected: ${socket.id}`);
  });
});

server.listen(3000, () => {
  console.log('🚀 Server started on port 3000');
});


