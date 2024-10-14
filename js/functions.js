const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.getElementById('guessCount')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext",
]

let randomizerWord = ''
let maskedWord = ''
let guessCount = 0

const newGame = () => {
    const random =  Math.floor(Math.random() * words.length)
    randomizerWord = words[random]
    maskedWord = "*".repeat(randomizerWord.length)
    guessCount = 0
    console.log(randomizerWord)
    output.innerHTML = maskedWord
    span.innerHTML = guessCount
}

const win = () => {
    alert(`You have guessed right, the word is ${randomizerWord}.`)
    newGame()
}

const replaceFoundChars = (guess) => {
    for (let i = 0;i<randomizerWord.length;i++) {
        const char = randomizerWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
}


newGame()

input.addEventListener('keypress', (e) =>{
    if (e.key=== 'Enter'){
        e.preventDefault() 

        const guess = input.value.trim()
        guessCount++
        span.innerHTML = guessCount

        if (guess.toLowerCase() === randomizerWord.toLowerCase()) {
            win()

        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizerWord.toLocaleLowerCase()){
                win()
            }

        } else {
            alert("You guessed wrong!")
        }
        input.value=''
    }
})