//Criando um vetor
let num = [5 , 8, 2, 9, 3]
//Exibindo ele por completo
console.log(`Nosso vetor é o ${num}`)

//Acrecentar um número em nosso vetor
num[5] = 6
console.log(`Nosso vetor agora é: ${num}`)

//Atribuir um valor no ultimo espaço do vetor
num.push(1)
console.log(`Adicionando com num.push, Nosso vetor agora é: ${num}`)

//Sabendo o tamanho do vetor
console.log(`O nosso vetor tem ${num.length} posições`)

//Lendo valores das casas 
console.log(`O valor da primeira posição é ${num[0]}`)

//Colocando em ordem numérica
console.log(`O vetor em ordem é ${num.sort()}`)