// server/server.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(express.json());

// Create HTTP server and Socket.IO instance
const httpServer = http.createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

// REST routes
const gameRoutes = require('./routes/games');
app.use('/api/games', gameRoutes);

// WebSocket logic
require('./sockets/gameSockets')(io);

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => console.log(`Server on ${PORT}`));
