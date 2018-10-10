var wins = 0

// variables that hold references to HTML
var score = document.getElementById("win-text")
var currentWord = document.getElementById("currentWord-text")
var guesses = document.getElementById("guesses")
var lettersRemaining = document.getElementById("lettersRemaining-text")


// array to hold answers 
var options = ["Omen", "Sixth Sense", "Silence of the Lambs", "Scream", "Hocus Pocus", "Carrie", "Bettlejuice"]
var choice = Math.floor(Math.random()*7);
var answer = options[choice]; 
var wordLength = answer.length; 
var guessedLetters = []
var targetDiv = document.getElementById("guessedWord")

//
var maxTries = 15
var remainingGuesses = 0

// function is run anytime user guesses letter 
// document.onkeyup = function hangman (guess) {
// // Determines which key was pressed
// var userGuess = event.key; 
// //logic determines outcome if guess was correct in the string
//     if (answer.includes(/guess/i)) {
// // if true push letter on to guessedLetter array
//         guessedLetters.push(guess)
//     }console.log(guess)
// } 

for (var i in wordLength) {
    guessedLetters.push("_")
}