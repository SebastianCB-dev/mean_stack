const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
    // Lo que recibe el servidor
    console.log(req);
    // Enviar una respuesta al cliente
    res.end();

});

// Especificar el puerto en el que se va a ejecutar
server.listen(PORT, () => {
    console.log('Server listen in ', PORT)
});









