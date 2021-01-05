let arrayA = [2, 3, 4, 5, 5, 6, 78, 7]
let arrayB = [2, 13, 54, 5, 6, 7, 8, 8, 4, 56]
maiorOf = (a, b) => {

    if (a > b) {
        return console.log(a)
    } else
        return console.log(b)
}
menorOf = (a, b) => {

    if (a < b) {
        return console.log(a)
    } else
        return console.log(b)
}


//arrayTest(arrayA, arrayB)

let arrayC = [1, 3, 2]
arraySort = (a) => {
        let array = a
        for (i = 0; i < array.length; i++) {

            for (j = i + 1; j < array.length; j++) {

                if (array[i] > array[j]) {

                    let pos = array[j]

                    array[j] = array[i]

                    array[i] = pos
                }

            }

        }
        return (array)
        console.log(array)
    }
    // arraySort(arrayC)
arrayD = [50, 80, 5, 570, 45]

biggestArray = (d) => {

        let b = 0
        for (i in d) {
            if (d[i] > b) {
                b = d[i]
            }
        }
        return b
    }
    //console.log(biggestArray(arrayD))

smallestArray = (d) => {
        let b = d[0]
        for (i in d) {
            if (d[i] < b) {
                b = d[i]
            }
        }
        return b
    }
    //console.log(smallestArray(arrayD))
arrayE = [50, 80, 5, 570, 45]
mediaArray = (e) => {
        let all = 0
        for (i in e) {
            all += e[i]
        }
        let media = all / e.length
        return console.log(media)
    }
    //mediaArraay(arrayE)

parImpar = (num) => {
        if (num % 2 == 0) {
            console.log('Número par!')
        } else
            console.log('Número impar!')
    }
    //parImpar(3)
toHundred = () => {
        for (i = 1; i <= 100; i++) {
            if (i % 4 != 0) {
                console.log(i)
            } else {
                console.log('pi')
            }
        }
    }
    //toHundred()

let pessoa = {
    Nome: 'Rafael',
    idade: 22,
    estado: "Dead Inside"
}

printObject = (obj) => {

    console.log(obj)
}

//printObject(pessoa)
let date = new Date(2020, 03, 20)
organizeDate = (dt) => {
        console.log('Dia: ' + dt.getDate() + ' Mês: ' + dt.getMonth() + ' Ano: ' + dt.getFullYear())
    }
    //organizeDate(date)
biggestArray = (d) => {

    let b = 0
    for (i in d) {
        if (d[i] > b) {
            b = d[i]
        }
    }
    return b
}

mediaArray = (e) => {
    let all = 0
    for (i in e) {
        all += e[i]
    }
    let media = all / e.length
    return media
}
smallestArray = (d) => {
    let b = d[0]
    for (i in d) {
        if (d[i] < b) {
            b = d[i]
        }
    }
    return b
}
createPerson = (alt, idad) => {
        return {
            altura: alt,
            idade: idad
        }
    }
    // Escreva um programa que receba um array de objetos 
    // com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade
let pessoas = [
    createPerson(1.88, 21),
    createPerson(1.70, 22),
    createPerson(1.58, 27),
    createPerson(1.60, 20),
    createPerson(1.62, 19)
]

questNove = (pess) => {
        let idades = []
        let alturas = []

        pess.forEach(element => {
            idades.push(element.idade)
            alturas.push(element.altura)
        })
        console.log('Média de idades: ' + mediaArray(idades))
        console.log('Maior das alturas: ' + biggestArray(alturas))
        console.log('Mneor das alturas: ' + smallestArray(alturas))

    }
    //questNove(pessoas)


escada = (a) => {
        for (i = 1; i <= a; i++) {
            let string = ''
            for (j = 1; j <= i; j++) {
                string += '* '
            }
            console.log(string)
        }
    }
    //escada(5)
arvore = (tam) => {
        for (let i = 1; i <= tam; i++) {
            let linha = ''
            let tam1 = (tam - i)
            for (let esp = 1; esp <= tam1; esp++) {
                linha += ' '
            }
            let tam2 = (2 * i) - 1
            for (star = 1; star <= tam2; star++) {
                linha += '*'
            }
            console.log(linha)
        }
    }
    //arvore(3)

function factorial(n) {
    let fact = n
    for (let i = fact - 1; i >= 1; i--) {
        fact *= i
    }
    console.log(fact)

}

//factorial(3)

readLine = (r) => {
    const PI = Math.PI;
    let area;
    area = PI * r * r;

    console.log(area);
    let perimetro;
    perimetro = PI * 2 * r;
    console.log(perimetro);

}
readLine(2.6)