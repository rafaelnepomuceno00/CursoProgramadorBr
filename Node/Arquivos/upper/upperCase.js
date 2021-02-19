let fs = require('fs')

let args = process.argv.slice(2)

let filename = args[0]

fs.readFile(filename, 'UTF8', (error, data) => {
    if (error)
        throw error

    fs.writeFile(filename + '_Uppercase', data.toUpperCase(), (error) => {
        if (error) throw error

        console.log('Arquivo gerado com sucesso')
    })
})