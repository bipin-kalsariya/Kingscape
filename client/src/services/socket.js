// services/socket.js
import { io } from 'socket.io-client';
const socket = io(process.env.REACT_APP_WS_URL);
export default socket;
