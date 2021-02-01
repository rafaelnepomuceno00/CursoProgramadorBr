var pessoa = {
    nome: "José Silva",
    idade: "32"
}

var contato = {
    telefone: 8765432,
    email: "jose@gmail.com"
}


var copia = {...pessoa, cidade: 'moc', ...contato }
copia.idade = 45


console.log(pessoa)
console.log(copia)