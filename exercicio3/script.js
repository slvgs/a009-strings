//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres:\"BOAS VINDAS\", mas não deixe o gato sair"
console.log(frase)
const frase2 = frase.replaceAll("verde","rosa").replaceAll("azul", "laranja")
console.log(frase2)
const fraseMaiusc = " mas não deixe o gato sair".toUpperCase()
console.log("Esta nova frase inclui verde ou laranja?", frase2.includes("verde"), frase2.includes("laranja"))
console.log(`Frase nova: ${frase2.replace('mas não deixe o gato sair', fraseMaiusc)}`)
