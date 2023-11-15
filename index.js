const express = require('express');
const server = express();
const cors = require('cors');




// Rota para obter um número aleatório inteiro entre 1 e 100
server.use(cors());
server.get('/numero-aleatorio', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    res.json({numeroAleatorio});


});

// Inicia o servidor na porta especificada
server.listen(3000, () => {
    console.log("Servidor OK");
});


