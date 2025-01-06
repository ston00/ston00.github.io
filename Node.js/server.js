const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url == "/") {
        res.writeHead(200, {
            'Content-type': 'text/plain'
        })
        res.end("Hello World.")
    } else if (req.url == "/contact") {
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        var contactInfoJSON = {
            "contactName": "Steven Ton",
            "contactEmail": "steventon00@gmail.com"
        }
        res.end(JSON.stringify(contactInfoJSON))
    } else if (req.url == "/admin") {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end('<html><body><p>This is the admin page</p></body></html>')
    } else {
        res.writeHead(404)
        res.end('<html><body><h1>NOT FOUND 2!</h1></body></html>')
    }
    
})

server.listen(port, hostname, () => {
    console.log('RUNNING!')
})