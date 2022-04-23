import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import generatePixelData from './src/generatePixelData.js';

// Server settings
const app = express();
const server = http.createServer(app);

const io = new Server(server);

// Game settings
const pixelSize = 50;
const canevasHeight = 300;
const canevasWidth = 300; 

let pixelData = generatePixelData({
    // Taille donnée pour les tests. A retirer à la fin pour prise auto. 600 X 900
    pixelSize,
    width: canevasWidth,
    height: canevasHeight,
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
    socket.emit(
        "update-pixel-data", 
        pixelData,
        pixelSize,
        canevasWidth,
        canevasHeight);
});

// Server start
server.listen(3000, () =>{
    console.log("Server started");
});