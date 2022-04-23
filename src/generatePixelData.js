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
            // Pas nécésaire, plus pour test
            const isColor = Math.random() > 0.7; // 7 chance sur 10
            const colors = ['red', 'blue', 'pink', 'green', 'black'];
            const colorIndex = Math.floor(Math.random() * colors.length);
            const color = colors[colorIndex];
            row.push(isColor ? color : null);
        }
        pixelData.push(row);
    }
    return pixelData;
};

export default generatePixelData