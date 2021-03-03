let randomWords = []
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let characters = [3, 4, 5]

function createRandomWords() {
    for (var i = 0; i < 10000; i++) {
        let chars = characters[Math.floor(Math.random() * characters.length)]
        randomWords.push(createWord(chars))
    }
}
function createWord(number) {
    var word = ''
    for (i = 0; i < number; i++) {
        letter = letters[Math.floor(Math.random() * letters.length)]
        word += letter
    }
    return word
}

function checkPolindromes(randomWords){
    var numbersOfPolinders = 0

    for(randomWord of randomWords){
        let reverse = randomWord.split('').reverse().join('')
        if (reverse == randomWord) {
            console.log(reverse);
            numbersOfPolinders ++
        }
    }
    return numbersOfPolinders
}
createRandomWords()
console.log(randomWords)
checkPolindromes(randomWords)
console.log(checkPolindromes(randomWords));

