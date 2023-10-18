/* menor de 16 anos é não vota
de 16 a 18 opocional
maior de 18 obrigatorio */

var idade = 66

console.log(`Você tem ${idade}. `)
if (idade < 16 ) {
    console.log("não vota !")
} else if (idade < 18 || idade > 65 ) {
    console.log("Voto Opicional !")
} else { 
    console.log("Voto Obrigatório !")
}