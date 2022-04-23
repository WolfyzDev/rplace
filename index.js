import express from 'express';
import generatePixelData from './src/generatePixelData.js';

const pixelData = generatePixelData({
    // Taille donnée pour les tests. A retirer à la fin pour prise auto. 600 X 900
    pixelSize: 50,
    width: 300,
    height: 300,
});
console.table(pixelData);

const app = express();

app.get('/', (req, res) => {
    res.send("Page homepage");
});

app.listen(3000, () =>{
    console.log("Server started");
});