const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plan'});
    res.writeHead('Hello Universe!');
    res.end();
}).listen(8080)

console.log('Server running on Port 8080')