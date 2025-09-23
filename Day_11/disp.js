const h = require('http')
var url = require('url')
const server = h.createServer(function (request, response) {
    let d = request.url
    let d1 = url.parse(d, true).query;
    response.writeHead(200, { 'content-Type': 'Text/html' })
    console.log(request.headers)
    if (d1.fname = 'ABC') {
        response.write("<h1>"+"Hello " + d1.fname + "</h1>")
    }
    else {
        response.write(JSON.stringify({ message: "Hello" }))
    }
    response.end();
})
server.listen(3000);