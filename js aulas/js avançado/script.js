change1 = (input) => {
    //let input = document.getElementById('text')
    let h1 = document.getElementsByTagName('h1')[0]
    h1.innerText = input.value
}
mouseIn = (vlr) => {
    vlr.style.backgroundColor = 'yellow'
}
mouseOut = (vl) => {
    vl.style.backgroundColor = 'purple'
}
onClique = (a) => {
    a.innerHTML = 'Você já clicou'
}
onClique2 = () => {
    this.style.backgroundColor = 'red'
}


function loaded() {
    let b = document.getElementById('teste')
    b.addEventListener('onmouseover', onClique2)
}

mudarText = () => {
    this.innerHTML = 'clicou'
}