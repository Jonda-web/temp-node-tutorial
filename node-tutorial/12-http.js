const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to hell motherfucker')
    }
    if(req.url === '/about') {
        res.end('Here is a short history of hell')
    }
    res.end(`<h1>Hi!</h1>
    <p>We can't seem to find your punishment</p>
    <a href="/"> Back to hell </a>
    `)
});

server.listen(6969)