// Sintaxe e Operadores
// Este repositório contém a atividade prática do Curso "Sintaxe e Operadores", que faz parte do Basecamp de Javascript que minstrei pela Digital Innovation One.

// Atividade
// Crie uma função que recebe dois números como parâmetros.
// Confira se os números são iguais.
// Confira se a soma dos números é maior que 10 ou menor que 20.
// Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
// Exemplo:

// Input: 1, 2
// Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

function compare(num1, num2) {
    (num1 === num2) ? console.log("Os números 1 e 2 São Iguais") : console.log(" Os Numeros 1 e 2 Não são iguais")
  
    let soma = num1 + num2
    if (soma >= 10 || soma <= 20) {
       return console.log("Sua soma é " + soma, "que é maior que 10 ou menor que 20");
    } else {
      console.log("Sua Soma é maior do que 20");
    }


  }
  console.log(compare(5,3))