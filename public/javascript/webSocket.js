const startWebSocket = () => {
    const socket = io();

        socket.on('update-pixel-data', (pixelData) => {
            console.table("pixelData", pixelData);
        });
};

export default startWebSocket