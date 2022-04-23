// Suavegarde à l'étape 3 de 'index.js'

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import generatePixelData from './src/generatePixelData.js';

// Server settings
const app = express();
const server = http.createServer(app);

const io = new Server(server);

// Game settings
let pixelData = generatePixelData({
    // Taille donnée pour les tests. A retirer à la fin pour prise auto. 600 X 900
    pixelSize: 50,
    width: 300,
    height: 300,
});
console.table(pixelData);


// Server Routes
// app.get('/', (req, res) => {
//     res.send("Page homepage");
// });

// Server "Routes" >> Pour que index.html devienne la page d'accueil
app.use(express.static("public"))

io.on('connection', (socket) => {
    console.log(`A user is connected [${socket.id}]`);
    socket.emit("update-pixel-data", pixelData);
});

// Server start
server.listen(3000, () =>{
    console.log("Server started");
});