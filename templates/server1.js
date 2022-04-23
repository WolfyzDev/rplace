// Lancement d'un premier serveur sur le port local 3000 (localhost:3000) avec "homepage inscrit"
// Librairie requise : express

// Note : type d'importation : module
// Dans package.json : 
// "type":"module",

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Page homepage");
});

app.listen(3000, () =>{
    console.log("Server started");
});