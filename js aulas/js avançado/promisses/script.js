let usuarios = ['rafael', 'marcos', 'Amanada', 'Igor']

function inserirUsuario(nome) {

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            usuarios.push(nome)
            let error = false

            if (!error) {
                resolve()
            } else {
                reject({ msg: "Erro ao inserir" })
            }
        }, 1000)
    })
    return promise
}

function listarUsuarios() {
    console.log(usuarios)
}

inserirUsuario('Leandro').then(listarUsuarios).catch(
    (error) => { console.log(error.msg) }
)