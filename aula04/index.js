"use strict";
//função que pede nome, idade, e se tem carteira de motorista
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var nome = readlineSync.question("Qual é o seu nome? ");
var idade = Number(readlineSync.question("Qual sua idade? "));
var temCarteira = readlineSync.question("Você possui carteira de motorista? (sim/nao)");
function PodeDirigir(nome, idade, Temcarteira) {
    if (idade >= 18 && temCarteira === "sim") {
        console.log("".concat(nome, ", voc\u00EA pode dirigir."));
    }
    else {
        console.log("".concat(nome, ", voc\u00EA n\u00E3o pode dirigir."));
    }
}
PodeDirigir(nome, idade, temCarteira);
