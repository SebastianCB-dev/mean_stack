const http = require('http');

const PORT = 5000;
const books = [
    { "title": "Libro de programación", "autor": "Sebastian Carrillo"},
    { "title": "1984", "autor": "George Orwell"},
    { "title": "Harry Potter", "autor": "Heli Ojeda"}
];

const server = http.createServer((req, res) => {
    // Lo que recibe el servidor
    // console.log(req);
    // const { headers, url, method } = req;
    // console.log(headers, url, method);
    // res.setHeader('Content-Type', 'text/plain')
    // res.setHeader('Content-Type', 'text/html')
    res.setHeader('Content-Type', 'application/json')
    // res.write('<h1>Esto es una prueba</h1>');
    
    // Enviar una respuesta al cliente
    res.end(
        JSON.stringify({data: books})
    );

});

// Especificar el puerto en el que se va a ejecutar
server.listen(PORT, () => {
    console.log('Server listen in ', PORT)
});

// !Video 004







