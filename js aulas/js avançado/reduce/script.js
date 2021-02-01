function novoAluno(nome, idade) {
    return { nome, idade }
}


let alunos = [
    novoAluno("Rafael", 22),
    novoAluno("Amanda", 27),
    novoAluno("Natalia", 32),
    novoAluno("Marcos", 21)
]

function idadeDaTurma(total, alunos) {
    return total + alunos.idade
}

console.log(alunos.reduce(idadeDaTurma, 0))