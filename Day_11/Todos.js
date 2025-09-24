const http = require('http')
var {URL} = require('url')
let todos = [
    {id:1 , task:"Read Carefully"},
    {id:2 , task:"Implementation"}
];
const server = http.createServer(function (request, res) {
    const {method,url} = request;
    const parsedUrl = new URL(url,`http://${request.headers.host}`) 
    const pathname = parsedUrl.pathname;
    if(method == 'GET' && pathname=='/todos'){
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify(todos))
    }
    if (method === 'GET' && pathname === '/todos/1') {
    const todoId = 2;
    const todo = todos.find(item => item.id === todoId);

    if (todo) {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(todo));
    } 
}

})
server.listen(3409,()=>(console.log("Server Started")
))