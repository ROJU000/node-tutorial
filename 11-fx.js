const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
    if (req.url === '/') {
        res.end('hi')
    }
    if (req.url === '/about') {
        res.end('about')
    }
})

server.listen(5000)
