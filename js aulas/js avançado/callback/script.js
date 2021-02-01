let usuarios = ['rafael', 'marcos', 'Amanada', 'Igor']

function inserirUsuario(nome, callback) {

    setTimeout(() => {
        usuarios.push(nome)
        callback()
    }, 1000)
}

function listarUsuarios() {
    console.log(usuarios)
}

inserirUsuario('Cris', listarUsuarios)