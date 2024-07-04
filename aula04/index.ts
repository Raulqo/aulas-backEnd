
//função que pede nome, idade, e se tem carteira de motorista

import * as readlineSync from "readline-sync";

let nome:string = readlineSync.question("Qual é o seu nome? ")
let idade:number = Number(readlineSync.question("Qual sua idade? "))
let temCarteira: string = readlineSync.question("Você possui carteira de motorista? (sim/nao)")

function PodeDirigir (nome: string, idade: number,Temcarteira: string):void {
   if (idade >= 18 && temCarteira === "sim"){
    console.log(`${nome}, você pode dirigir.`)
   }else{
    console.log(`${nome}, você não pode dirigir.`)
   }
}
PodeDirigir(nome, idade, temCarteira);