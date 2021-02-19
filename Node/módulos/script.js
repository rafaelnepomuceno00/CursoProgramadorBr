let soma  = require('./soma')
let mult  = require('./mult')
let calc = require('./calc')
//para exportar mais de uma coisa, se exporta via objeto
let args = process.argv.slice(2)

console.log(args)


// let a = Number(args[0])
// let b = Number(args[1])

// let c = soma(a,b)

// function soma (x,y){
//     return x+y
// }

// console.log(c)


let a = Number(args[1])
let b = Number(args[2])

let c = ''

if(args[0] == 's'){
    c =  soma(a,b)
}
else if(args[0] == 'm'){
    c = mult(a,b)
}
else if(args[0] == 'd'){
    c = calc.dobr(a)
}
else if(args[0] == 'q'){
    c = calc.quad(a)
}
else{
    c = 'Opção inválida'
}




console.log(c)