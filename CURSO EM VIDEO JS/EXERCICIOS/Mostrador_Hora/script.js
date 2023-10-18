function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var minutos = data.getMinutes()
    var hora = data.getHours()
    //hora = 13
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia 
        img.src = 'img/manhã.jpg'
        document.body.style.background = '#CD853F'
    } else if (hora >=12 && hora < 18) {
        //Boa tarde ! 
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#00CED1'
    } else {
        //Boa noite !
        img.src = 'img/noite.jpg'
        document.body.style.background = '#696969'
    }
}