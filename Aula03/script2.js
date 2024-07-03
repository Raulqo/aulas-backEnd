//Atividade 2
const leitor = require("readline-sync")

const senha = "1234"
const novaSenha = leitor.question("Digite a senha: ")

    if(senha == novaSenha) {
console.log("Login bem sucedido")
    } else {
        console.log("Senha incorreta")
    }