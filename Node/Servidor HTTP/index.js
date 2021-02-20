const http = require('http')
const url = require('url')
const fs = require('fs')


http.createServer((resquest, response) => {
    let path = url.parse(resquest.url).pathname
    if(path == ''|| path =='/'){
        path = '/index.html'
    }
    let fileName = '.' + path

    fs.readFile(fileName, (err, data) => {
        if (err) {
            response.writeHead(404, { 'Content-type': 'text/html;charset=utf-8' })
            response.end('<h1>Página não encontrada</h1>')
        }else{
            response.writeHead(200, { 'Content-type': 'text/html' })
            response.write(data)
            response.end()
        }
    })



}).listen(3000, (err) => {
    if (err) { console.log(err) }
    console.log('Servidor rodando na porta 3000')
})
