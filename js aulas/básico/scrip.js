//alert('hello world')
// console.log('Testando')

// var a = 'Eae man! Vamos virar programador'

// console.log(a)

// var b = 30
// b--
// console.log(b)

//atribuições de verificações são válidas

// var idade = 40

// var menor10 = idade <= 10
// var maior65 = idade >= 65

// var gratuidade = menor10 || maior65

// console.log('Idade :', idade)
// console.log('Maior que 65', maior65)
// console.log('Menor que 10', menor10)
// console.log('Tem direito a gratuidade?', gratuidade)

// var str = "Valor qualquer"
// str += " outro texto"
// 
// console.log(str)
// 
// 

// var idade = 17

// idade >= 18 ? console.log('Pode!') : console.log('Não pode!')

// var pode = idade >= 18 ? 'Pode' : 'Não pode'
// console.log(pode)

// var nota1 = 8.0
// var nota2 = 7.5

// var media = (nota1 + nota2) / 2

// var conceito = ''

// if (media >= 8) {

//     conceito = 'Ótimo'
// } else if (media >= 6.5) {
//     conceito = 'Bom'

// } else {
//     conceito = 'Regular'
// }

// console.log(media)
// console.log(conceito)


// switch (conceito) {
//     case 'Ótimo':
//         console.log('Excelente!')
//         break
//     case 'Bom':
//         console.log('Muito bom, quase lá!')
//         break
//     case 'Regular':
//         console.log('Precisa estudar')
//         break
//     default:
//         console.log('Erro')
//         break
// }

// var alunos = ['rafael', 'amanda', 'marcos', 'igor']

// for (var i in alunos) {
//     console.log(i)
// }

// for (aluno of alunos) {
//     console.log(aluno)
// } 

// var nomes = ['Rafael', 'Igor', 'Marcos']
// var notasA = [9.3, 6.9, 8.0]
// var notasB = [6.0, 5.0, 7.0]

// function media(n1, n2) {
//     return (n1 + n2) / 2
// }
// var passou = (media) => {
//     if (media > 7) {
//         return 'Aprovado'
//     } else {
//         return 'Reprovado'
//     }
// }
// for (var index in nomes) {
//     //eu poderia jogar notaA e B dentro de uma variavel pra reduzir
//     var nt1 = notasA[index]
//     var nt2 = notasB[index]

//     var m = media(nt1, nt2)
//     console.log(
//         nomes[index] + ' - ' +
//         nt1 + ' - ' +
//         nt2 + ' - ' +
//         m + ' - ' +
//         passou(m))
// }