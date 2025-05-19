/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

const prompt = require('prompt-sync')()


let resultado = 0
let contador = 0

while(true){

    let valor =  Number(prompt('Digite um número para ser soma(pressine 0 para finalizar): '))

    if(valor != 0){
        resultado += valor
        contador++
    }else{
        break
    }
}

if(resultado == 0){
    console.log('Não foram inseridos números.')
}else{
    console.log('A soma total dos números inseridos foi de',resultado,'sendo a quantidade de números inseridos de',contador,'e a média aritmética é de', resultado / contador)
}