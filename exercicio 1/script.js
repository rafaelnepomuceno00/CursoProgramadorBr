function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('images')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    var mnts = data.getMinutes()
    msg.innerHTML = `São ${hora}:${mnts} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#2d862d'
        msg2.innerHTML = "Bom dia!"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#993d00'
        msg2.innerHTML = 'Boa Tarde!'
    } else {
        img.src = "noite.jpg"
        document.body.style.background = '#00091a'
        msg2.innerHTML = 'Boa Noite!'
    }

}