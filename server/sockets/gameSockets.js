// server/sockets/gameSockets.js
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
    });

    socket.on('makeMove', ({ roomId, from, to, san }) => {
      // Broadcast to other player
      socket.to(roomId).emit('opponentMove', { from, to, san });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
