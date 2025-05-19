/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

const prompt = require ('prompt-sync')()

let valor = 0
let resultado = 0

for( let i = 1; i <=5; i++){

    valor = Number(prompt('Digite um número: '))
    resultado += valor

}

console.log('O resultador final da soma dos 5 números é de',resultado)