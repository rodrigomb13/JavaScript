var notas = [8.0, 7.0, 8.3, 9.0, 4.5, 6.0, 3.7, 5.0, 7.1, 9.5, 6.0] 

var soma = notas.reduce((ant, atual) => ant + atual)
var media = soma/11
console.log("Media das notas", media)

var aprov = notas.filter((nota) => nota > 6)
console.log("Alunos aprovados",  aprov)

var situaçao = notas.map((situ) => situ >6 ? 'aprovado' : 'reprovado')
console.log(situaçao)