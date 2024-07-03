//Atividade 3
const leitor = require("readline-sync")

const valorUm = leitor.questionInt("insira o primeira valor: ")
const valorDois= leitor.questionInt("insira o segundo valor:")

const operacao = leitor.question("Digite o simbolo da operação desejada: +, -, *, /: ")
if (operacao == "+"){
    console.log(`A soma é ${valorUm + valorDois}`)
} else if(operacao == "-"){
    console.log(`A subtração é ${valorUm - valorDois}`)
}else if (operacao = "*"){
    console.log(`A Multiplicacão é ${valorUm * valorDois}`)
}else if (operacao == "/"){
    console.log(`Essa divisão é ${valorUm / valorDois}`)
}