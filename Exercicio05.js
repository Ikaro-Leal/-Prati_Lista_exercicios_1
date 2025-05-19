const prompt = require('prompt-sync')()

let peso = Number(prompt('Digite seu peso (kg): '))
let altura = Number(prompt('Digite sua altura (m)(com o ponto): '))

let imc = peso / (altura ** 2)

console.log('Seu IMC é:', imc.toFixed(2))

if (imc < 18.5) {
    console.log('Classificação: Baixo peso')
} else if (imc < 25) {
    console.log('Classificação: Peso normal')
} else if (imc < 30) {
    console.log('Classificação: Sobrepeso')
} else {
    console.log('Classificação: Obesidade')
}
