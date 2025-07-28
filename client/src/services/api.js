// services/api.js
import axios from 'axios';
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });
export function saveGame(gameId, fen) { return API.post('/games', { gameId, fen }); }
export function loadGame(gameId) { return API.get('/games/' + gameId); }
