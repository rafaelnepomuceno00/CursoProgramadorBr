const http = require('http')

http.createServer((request, response) => {

    //madnando apenas tipo texto
    //response.writeHead(200, {'Content-Type':'text/plain'})


    //mandando html como resposta
    //response.writeHead(200, { 'Content-Type': 'text/html' })
    
    
    //mandando JSON como resposta
    response.writeHead(200, { 'Content-Type': 'text/json' })
    //o json precisa ser passado para string para ser lido
    response.end(JSON.stringify({texto:'<h1>Hello World!</h1>'}))
}).listen(3000, (err) => {
    if (err) { console.log(err) }

    console.log('Servidor rodando na porta 3000')
})