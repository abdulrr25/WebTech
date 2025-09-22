const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text' })
    res.end("Hello From node js")

})
server.listen(8080)