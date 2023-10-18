function verificar() {
    //Puxando do html
    let txt = document.getElementById('txtinput')
    let result = txt.value
    
    if (result == "Fernanda" || result == "fernanda") {
        res.innerHTML = `<strong>Você é o amor da minha vida !!</strong>`
    } else {
        res.innerText = "Vaza rapariga !!!"
    }
    
}

