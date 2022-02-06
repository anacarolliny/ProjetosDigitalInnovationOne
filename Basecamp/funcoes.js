// // Atividade 1: Alunos Aprovados
// // Crie uma função que recebe o array alunos e um número que irá representar a média final;
// // Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
// // Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
// // Atividade 2: This
// // Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {

  return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

obj = {
  nome: "Carol",
  idade: 26
}


console.log(calculaIdade.call(obj, 40))
console.log(calculaIdade.apply(obj, [50]))


// // function calculaIdade(anos) {
// // 	return `Daqui a ${anos} anos, ${this.nome} terá ${
// // 		this.idade + anos
// // 	} anos de idade.`;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 0) {
//     console.log("Seu array é igual a : " + array[i]);
// function alunosAprovados(alunos, mediaFinal) {
//   mediaFinal = 2
//   let alunosAprovados = []

// for (let i = 0; i < alunos.length; i++) {
//   if(alunos[i] <= mediaFinal){
//     alunosAprovados.push()
//   }
//   const notas = alunos[i];
//   return notas
  
// }

//   // for (nota of alunos) {
//   //   console.log(nota);
//   //     if(nota = mediaFinal){
//   //       alunosAprovados.push(alunos[nota])
//   //     //console.log("Os alunos que passaram foram : " + alunosAprovados);
//   //     // alunosNota = nota
//   //     // console.log(alunosNota);
//   // //     // let alunosPassaram = []
//   // //     // alunosPassaram.push()
//   //   }
//   //   return alunosAprovados
//   }

  alunos = [
    (aluno1 = {
      notas: 1,
      nome: "carol"
    }),
    (aluno2 = {
      notas: 2,
      nome: "isaque"
    }),
    (aluno3 = {
      notas: 3,
      nome: "israel"
    }),
  ];

function Aprovados(array, mediaFinal) {
  
let alunosAprovados = []

  for (let i = 0; i < array.length; i++) {
    const { notas, nome } = array[i]


    if(notas >= mediaFinal){
     alunosAprovados.push(nome)
       }
}
  return alunosAprovados

}

console.log(Aprovados(alunos, 2))
