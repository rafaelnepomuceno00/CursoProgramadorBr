function novoAluno(nome, idade) {
    return { nome, idade }
}

var alunos = [
    novoAluno('Rafael', 22),

    novoAluno('Cris', 52),

    novoAluno('Amanda', 27),

    novoAluno('Hilda', 62),

    novoAluno('Ana', 72)
]



//  fazer uma função que faça o que o map faz
function replicaMap(alunos, idade) {
    var alunosFiltrados = []
    alunos.forEach(element => {
        if (element.idade > idade)
            alunosFiltrados.push(element)

    });
    return alunosFiltrados
}

console.log(replicaMap(alunos, 30))




//  fazer uma função que faça o que o reduce faz
function replicaReduce(alunos, inicio) {
    var saida = inicio
    alunos.forEach(element => {
        saida += Number(element.idade)
    });

    return saida
}

console.log(replicaReduce(alunos, 0))