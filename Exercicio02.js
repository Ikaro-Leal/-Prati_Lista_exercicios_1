/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */

const prompt = require('prompt-sync')()

let idade = Number(prompt('Digite sua idade para saber sua faixa etária: '))

if(idade < 11){
    console.log('Você possui',idade,'anos e é uma criança.')
}else if(idade < 18){
    console.log('Você possui',idade,'anos e é um adolescênte.')
}else if (idade < 65){
    console.log('Você possui',idade,'anos e é um adulto.')
}else if (idade >= 65){
    console.log('Você possui',idade,'anos e é um idoso.')
}