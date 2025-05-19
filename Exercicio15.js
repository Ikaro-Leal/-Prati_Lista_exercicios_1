/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

const prompt = require('prompt-sync')()


let n1 = 0
let n2 = 1
let soma = 0

console.log('Abaixo se encontra a sequência de Fibonacci, até o décimo número da sequência')

for(let i = 1;i<=10; i++){
    console.log(n1)
    soma = n1 + n2
    n1 = n2
    n2 = soma
}

