//Atividade 4
const leitor = require("readline-sync")

const num1 = leitor.questionInt("Digite o primeiro numero:")
const num2 = leitor.questionInt("Digite o segundo numero:")
const num3 = leitor.questionInt("Digite o terceiro numero:")

if (num1 > num2 && num1 > num3){
console.log("O primeiro numero e o maior")
}
else if (num1 < num2 && num2 > num3) {
console.log("O segundo numero e o maior")
}
else if(num1 < num3 && num3 > num2) {
console.log("O terceiro numero é maior")
}