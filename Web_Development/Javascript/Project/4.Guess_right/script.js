const form = document.querySelector('form')
const input = document.querySelector('.wrapper input')
const submit = document.querySelector('.submit input')
const prev = document.querySelector('.prev')
const remain = document.querySelector('.remain')
const lowhigh = document.querySelector('.lowhigh')

let theNumber = getRandomNumber()
let attemptsLeft = 10
let previousGuesses = []

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1
}

function updateDisplay() {
    remain.textContent = `Guess Remaining : ${attemptsLeft}`
    prev.textContent = `Previous Guess : ${previousGuesses.join(', ')}`
}

function showMessage(message) {
    lowhigh.textContent = message
}

function validateguess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Enter a valid number guess from the given range')
        return false
    }
    return true
}

function checkguess(guess) {
    previousGuesses.push(guess)
    attemptsLeft -= 1
    updateDisplay()

    if (guess === theNumber) {
        showMessage(`You got it right, the number is ${theNumber}`)
        endgame()
        return
    }

    if (attemptsLeft <= 0) {
        showMessage(`You lost, the number was ${theNumber}`)
        endgame()
        return
    }

    if (guess < theNumber) {
        showMessage('Low')
    } else {
        showMessage('High')
    }
}

function endgame() {
    input.disabled = true
    submit.disabled = true

    let newGameButton = document.querySelector('.newgame')
    if (!newGameButton) {
        newGameButton = document.createElement('button')
        newGameButton.type = 'button'
        newGameButton.className = 'newgame'
        newGameButton.textContent = 'Play Again'
        newGameButton.addEventListener('click', initializeGame)
        form.appendChild(newGameButton)
    }
}

function initializeGame() {
    theNumber = getRandomNumber()
    attemptsLeft = 10
    previousGuesses = []
    input.value = ''
    input.disabled = false
    submit.disabled = false
    showMessage('Low or High')
    updateDisplay()

    const newGameButton = document.querySelector('.newgame')
    if (newGameButton) {
        newGameButton.remove()
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()
    const guess = parseInt(input.value, 10)

    if (!validateguess(guess)) {
        return
    }

    checkguess(guess)
    input.value = ''
    input.focus()
})

updateDisplay()

