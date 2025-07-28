
const router = require('express').Router();
const Game = require('../models/Game');

// Save or update game
router.post('/', async (req, res) => {
  const { gameId, fen, moves } = req.body;
  await Game.findByIdAndUpdate(gameId, { fen, moves, createdAt: new Date() }, { upsert: true });
  res.sendStatus(200);
});

// Load game
router.get('/:gameId', async (req, res) => {
  const game = await Game.findById(req.params.gameId);
  if (!game) return res.sendStatus(404);
  res.json(game);
});

module.exports = router;
