/*/string
let nome:string = "Raul"

//number
let numero:number = 100

//Boolean
let GameOver:boolean = true

//Array
let arr: Array<number> = [1,2,3]/*



//objeto

/*let person: {name: string, age: number} =
{
    name: "Raul",
    age: 15
}

//
function soma (num1:number, num2: number):number{
    return num1 + num2
}
function frase (nome:string):string {
    return `Olá ${nome}, tudo bem?`
}
function chamaAlgo(nome:string):void {
    console.log(`Eaí ${nome}!`)
}

function frase(nome?:string):void{
    console.log("hello",nome || "World")
}
frase("Maria")

function desconto (preco:number, desconto:number = 0.05):number {
    return preco * (1 - desconto)
}
console.log(desconto(5))

function frase(nome:string = "João", idade:number = 40):void {
    console.log (`Olá ${nome}, você tem ${idade} anos.`)
}
frase("Raul", 15)*/


//Estou criando um "molde" para objetos do tipo Cachorro
class Cachorro{
    nome:string
    peso:number
    pelagem:string
    raça:string

    constructor(dogNome:string, dogPeso:number, dogPelagem:string){
        this.nome = dogNome
        this.peso = dogPeso
        this.pelagem = dogPelagem
        this.raça = "golden"
    }
    
    latir():void{
        console.log(`${this.nome} está latindo.`)
    }
    correr():void {
        console.log ("cachorro está correndo.")
    }
    comer():void {
        console.log("O cachorro está comendo.")
    }
}
