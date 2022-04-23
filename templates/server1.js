// Sauvegarde 1 
// Lancement d'un premier serveur sur le port local 3000 (localhost:3000) avec "homepage inscrit"
// Librairie requise : express

// Note : type d'importation : module
// Dans package.json : 
// "type":"module",

import express from 'express';

const app = express();

// Server routes
app.get('/', (req, res) => {
    res.send("Page homepage");
});

// Server start
app.listen(3000, () =>{
    console.log("Server started");
});