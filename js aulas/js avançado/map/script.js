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

function nomeIdade(aluno) {

    return aluno.nome + " tem " + aluno.idade + " anos"

}

function nomeIdade2(aluno) {

    return {
        nome: aluno.nome,
        idade: aluno.idade
    }

}

function AlunoDaqui5Anos(aluno) {

    return {
        nome: aluno.nome,
        idade: aluno.idade + 5
    }

}

function AlunoDaqui5Anos2(aluno) {

    aluno.idade += 5
    return aluno

}

console.log(alunos.map(AlunoDaqui5Anos))