// Atividade 1
// Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

// Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

// function verificarPalindromo(string) {
//   if(!string) return "String inesistente"

//   return string.split("").reverse().join("") === string

//   // return string.reverse()
//   // console.log(string);
// }

// console.log(verificarPalindromo("ovo"))
// Atividade 2
// Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

// Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

// Output -> [1, 3, 0, 0, 0, 33, 23, 0]

// Input -> []

// Output -> -1

function substituirArray(array) {
  if(!array.length) return -1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("Seu array é igual a : " + array[i]);

    } else if (array[i] % 2 === 0) {
      
      console.log("Substituindo " + array[i] + " por 0");
      array[i] = 0
      console.log(array);
     
    }
    
    return array
  }
}
  


let arr = [1, 3, 4, 6, 80, 33, 23, 90]
//let arr = [];
console.log(substituirArray([]))
