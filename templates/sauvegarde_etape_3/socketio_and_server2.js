// Sauvegarde 3 
// Server.2 + SocketIO.1 
// But : Mise en place du dossier public + arrivée de l'event et de la grille sur le front 

// Dans index.js

// Importations supplémentaires 
import http from 'http';
import  { Server } from 'socket.io';

// Server settings
const app = express(); // Ligne déplacé par rapport à avant
const server = http.createServer(app);

const io = new Server(server);

// Game settings
let pixelData = generatePixelData({ /* Section non-mise mais présente */ }) // modif. const >> let 
// {Section non-mise mais présente}

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
server.listen(3000, () =>{ // Modif app >> server
    console.log("Server started"); // Pas de changement
}); // Pas de changement


// Pour autres modifs : voir save.md