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