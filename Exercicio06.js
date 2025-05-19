/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero. */

const prompt = require('prompt-sync')()

let a = Number(prompt('Digite o valor de A: '))
let b = Number(prompt('Digite o valor de B: '))
let c = Number(prompt('Digite o valor de C: '))


if(a < b + c && b < a + c && c < a + b){
    console.log('Os valores inseridos representam um triangulo.')
        if(a==b && b==c){
            console.log('Triangulo do tipo equilátero')
        }else if(a != b && b !=c && a !=c){
            console.log('Triangulo do tipo escaleno')
        }else if(a==b || a==c || b==c){
            console.log('Triangulo do tipo isósceles:')
        }

}else{
    console.log('Os valores inseridos não representão um triangulo')
}

