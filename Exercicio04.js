/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')()


console.log('Menu de profissões da empresa.')
console.log('1-Mecânico.')
console.log('2-Engenheiro.')
console.log('3-Atendente.')

let profissao = Number(prompt('Digite um número referente a usa profissão: '))

switch(profissao){
    case 1:
        console.log('Você é um Mecânico e o seu setor é o A.')
    break
    case 2:
        console.log('Você é um engenheiro e o seu setor é o B.')
    break
    case 3:
        console.log('Você é um atendente e o seu setor é o C.')
    break
    default:
        console.log('ERRO FATAL.')
    break
}