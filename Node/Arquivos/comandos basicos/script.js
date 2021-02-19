const { error } = require('console')
let fs = require('fs')

//escrever dentro de um arquivo
// sobrescrever
// fs.writeFile('teste.txt', 'Hello World', function(error){
//     if (error) {
//         throw error
//     }

//     console.log('arquivo criado com sucesso')
// })

//para concatenação 
// fs.appendFile('teste.txt', ' - Olá Mundo!', function(error){
//     if(error){
//         throw error
//     }
//     console.log('Atualizado com sucesso')
// })


//para apagar um arquivo

// fs.unlink('teste.txt', function (error) {
//     if (error) {
//         throw error
//     }
//     console.log('Apagado com sucesso')
// })


//para renomear um arquivo
// fs.rename('test.txt','NovoNome.txt', function (error) {
//         if (error) {
//             throw error
//         }
//         console.log('Renomeado com sucesso')
//     })

// para ler um arquivo é utilizado a funçãoa a baixo + o formato de leitura no caso utf8
fs.readFile('NovoNome.txt','UTF8', function(erro, data){
    if (erro) {
        throw erro
    }
    console.log(data)
})