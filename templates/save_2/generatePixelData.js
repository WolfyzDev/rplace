// Sauvegarde 2
// Génération de la table des pixels data (tableau) - Sauvegarde #1

// Fichier 'src/generatePixelData.js'
const generatePixelData = ({
    pixelSize = 10,
    width = 900, 
    height = 600
} = {} ) => {
    const colMax = width / pixelSize;
    const rowMax = height / pixelSize;

    const pixelData = [];

    for (let rowIndex = 0; rowIndex < rowMax; rowIndex++) {
        const row = [];
        for (let colIndex = 0; colIndex < colMax; colIndex++) {
            row.push(null);
        }
        pixelData.push(row);
    }
    return pixelData;
};

export default generatePixelData

// Partie ajoutée dans index.js
// importation supplémentaire
import generatePixelData from './src/generatePixelData.js';

// Game settingd
const pixelData = generatePixelData({
    // Taille donnée pour les tests. A retirer à la fin pour prise auto. 600 X 900
    pixelSize: 50,
    width: 300,
    height: 300,
});
console.table(pixelData);