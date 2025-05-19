/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

const prompt = require('prompt-sync')()

let resultado = 1

let num = Number(prompt('Digite um número para decobrir sua fatorial: '))



for(let i = 1; i <= num; i++){
    resultado *=  i
}



if(num < 0){
    console.log('Erro')
}else{
    console.log('A fatorial de',num,'é igual a',resultado)
}
