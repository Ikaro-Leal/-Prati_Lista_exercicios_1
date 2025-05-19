/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for. */

const prompt = require('prompt-sync')()

let i = null

let valor = Number(prompt('Digite um número para saber sua tabuada correspodente: '))


for( i = 0; i <= 10; i++){
    console.log(valor,'X',i,'=' ,valor*i)
}