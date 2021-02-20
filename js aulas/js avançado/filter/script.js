function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno('Rafael', 22),
    novoAluno('Cris', 52),
    novoAluno('Amanda', 27),
    novoAluno('Hilda', 62),
    novoAluno('Ana', 72)
]

function temMenosDe30(alunos) {
    return alunos.idade < 30
}

function temMaisDe30(alunos) {
    return alunos.idade > 30
}
console.log(alunos.filter(temMenosDe30))