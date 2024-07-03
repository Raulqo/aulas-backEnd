//atividade 1
const leitor = require("readline-sync")

let number = leitor.questionInt("insira um numero: ")
if (number >= 0) {
    console.log(`o valor ${number} é positivo. `)
} else if (number < 0) {
    console.log(`o valor ${number} é negativo. `)
} else if (number == 0) {
    console.log(`o valor ${number} é igual a zero. `)
} else {
    console.log("valor inexistente")
}




