function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente !.')
    } else {
        var fsex = document.getElementById('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
      //  var gênero = ''
        var img
        if (fsex[0].checked) {
            gênero = 'Homem'
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}