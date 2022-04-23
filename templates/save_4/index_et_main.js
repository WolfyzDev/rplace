// Sauvegarde 4

// Modifs Main.js (ensemble du fichier)

// import webSocket from "./webSocket.js";

// webSocket();

const socket = io();

socket.on(
    'update-pixel-data', 
    ({
        pixelData, 
        pixelSize, 
        canvasWidth, 
        canevasHeight
    }) => {
        console.table(
            "pixelData", 
            pixelData
        );
        drawPixel({
            pixelData, 
            pixelSize, 
            canvasWidth, 
            canevasHeight})
    });


// Si cela ne fonctionne pas correctement : 
// const socket = io();


// Modif index.js

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


io.on('connection', (socket) => {
    console.log(`A user is connected [${socket.id}]`);
    socket.emit(
        "update-pixel-data", 
        pixelData,
        pixelSize,
        canevasWidth,
        canevasHeight);
});


// Modif generatePixelData.js
for (let colIndex = 0; colIndex < colMax; colIndex++) {
    // Pas nécésaire, plus pour test
    const isColor = Math.random() > 0.7; // 7 chance sur 10
    const colors = ['red', 'blue', 'pink', 'green', 'black'];
    const colorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[colorIndex];
    row.push(isColor ? color : null);
}
pixelData.push(row);


// Note : tout ce qui est dans le fichier webSocket.js passe en comment 