var wins = 0

// variables that hold references to HTML
var score = document.getElementById("win-text")
var currentWord = document.getElementById("currentWord-text")
var wrongGuesses = document.getElementById("guesses")
var allowedGuesses = document.getElementById("lettersRemaining-text")
var guessedWord = document.getElementById("guessedWord"); 
var word; 
var maxTries = 10
var remainingGuesses = 0
// array to hold answers 
var options = ["Omen", "Sixth Sense", "Silence of the Lambs", "Scream", "Hocus Pocus", "Carrie", "Beetlejuice"]
var choice = Math.floor(Math.random()*7);
var answer = options[choice]; 
var wordLength = answer.length; 
var targetDiv = document.getElementById("currentWord-text")

//function for how game should be look when it is started / reset 

var guessedLetters = []

document.onkeyup() = function startGame () {
// sets current word to underscores
    for (var i = 0; i < wordLength; i++) {
        if (answer[i].match(/[a-zA-Z]/)) {
            guessedLetters.push("_")
        } else if (answer[i] === " ") {
            guessedLetters.push(" ")
        }
    } 
  
    guessedWord = document.createElement("div")
    guessedWord.textContent = guessedLetters.join("")
    currentWord.appendChild(guessedWord)


//  number of guesses remaining should be equal to maxTries
    var guessesLeft = document.createElement("div")
    guessesLeft.textContent = maxTries; 
    wrongGuesses.appendChild(guessesLeft);


    
 } 