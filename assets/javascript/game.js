//variables
var wordOptions = ["alohamora", "aquamenti", "confringo", "confundo", "crucio", "engorgio", "episkey", "expelliarmus", "finite", "immobulus", "imperio", "incendio", "legilimens", "lumos", "nox", "obliviate", "protego", "reducto", "reparo", "silencio"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

startGame();

//registering key press

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}
//Begin the Game with: select word, appear as blanks, 0 wins/losses, and 10 guesses
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random () * wordOptions.length)];
    
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;
    
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
    
    //write html updates
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCount").innerHTML = winCount; 
    document.getElementById("lossCount").innerHTML = lossCount;
}

function checkLetters(letter) {
    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if(selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    if(isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
    console.log(blanksAndSuccesses);
}

function roundComplete () {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    if(lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        document.getElementById("magicSound").play();
        alert("Congrats, you won!");
        document.getElementById("winCount").innerHTML = winCount;

        startGame ();
    }

    else if (guessesLeft == 0) {
        lossCount++;
        alert("Better luck next time!");
        document.getElementById("lossCount").innerHTML = lossCount;
        startGame ();
    }
}
