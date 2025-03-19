const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    console.log('Request received: ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is a Node.js server!');
});

server.listen(port, hostname, () => {
    console.log(`HTTP server running at http://${hostname}:${port}/`);
});
