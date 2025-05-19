/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')()

console.log('Maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia.')
console.log('Maças custam 0,25 se forem compradas pelo menos 12 unidades.')
let quantidade = Number(prompt('Digite a quantidade de maças que deseja comprar: '))

if(quantidade >= 12){
    console.log('O valor total de maçãs compras é de:',quantidade * 0.25)
}else{
    console.log('O valor total de maçãs compras é de:',quantidade * 0.30)
}