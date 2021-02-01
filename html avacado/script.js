let lista = document.getElementById('lista')

//let num = parseInt(lista.getAttribute('data-num'))

//para atribuir pode se usar desta forma:

lista.dataset.num = '8'

let num = parseInt(lista.dataset.num)

let conteudo = ''

for (let i = 1; i <= num; i++) {

    conteudo += '<li>' + i + '</li>'

}

lista.innerHTML = conteudo