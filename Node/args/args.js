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
else{
    c = 'Opção inválida'
}

function soma(x,y){
    return x+y
}
function mult(x,y){
    return x*y
}


console.log(c)