$(document).ready(function() {
    //Global
    var wordList = ["pencil", "calculator", "notebook", "pen", "binder", "paper", "textbook", "laptop", "highlighter", "planner", "flashcards"];
    var storeWord = [];
    //var blanks = 0;
    var progressWord = [];
    var guessedLetters = [];
    var guess = "";
    var currentWord = "";
    //Counters
    var wins = 0;
    var loses = 0;
    var numGuesses = 0;
    var correctGuess = false;
    var letterFound = false;

    //random word
    function generateRandom() {
        var random = Math.floor(Math.random() * wordList.length);
        currentWord = wordList[random];
        console.log(currentWord);
        // var n = currentWord.length;
        console.log(currentWord.length);
    }

    // blank start
    function showBlank () {
        for (var a = 0; a < currentWord.length; a++) {
            progressWord[a] = " __ ";
        }
       // document.getElementById("progress").textContent = progressWord.join("");
        console.log(progressWord)
    }

    //wins 
    function gameWon() {
        $("#totalWins").text = wins;
        $("#staus").text = "Awe too bad, the word was " + currentWord;

    }

    // Loses 
    function gameLost() {
        $("#totalLoses").text = loses;
        $("#status").text = "Congratulations!!"
        
    }
    // restuls 
    function winsAndLoses() {
        $("#totalwins").text = wins;
        $("#totalLoses").text = loses;
    }

    // Resets Game
    function resetGame() {
        numGuesses = currentWord.length + 3;
        currentWord = [];
        progressWord = [];
        guessedLetters = [];
        correctGuess = false;
        generateRandom();
        showBlank();
    }

    function endGame() {
        if (guessedLetters.toStrong() === blanksandWins.toString()) {
            gameWon();
        } else if (numGuesses === 0) {
            gameLost();
        }
    }

    //Execution
    resetGame();
    winsAndLoses();

    // // Check Letters
    // function check() {
    //     for (var b = 0; b < currentWord.length; b++) {
    //         if (currentWord[b] !== progressWord[b]) {
    //             letterFound = false;
    //         }
    //    } else {
    //        letterFound = true;
    //    }
    // };

    // keyup
    document.onkeyup = (function(event) {
        guess = event.key.toLowerCase()
        console.log(guess);
        for (var b = 0; b < currentWord.length; b++) {
            if (guess = currentWord[b]) {
                letterFound = true
            }
            else {
                letterFound = false
            }
        }
    })

    // replace letters
    function replaceLetters() {
        if (letterFound = true) {
            $("#progress").text = progressWord.join(" ");
        }
        else {
            $("#guessedLetters").text += 
            numGuesses--;
            $("#remainingGuess").text = numGuesses;
        }
    }

    //
    
    

    // display results
    function getResults() {
        $("#remainingGuesses").text = numGuesses;
        //$("#currentWord").text = progressWord.join("");
        $("#guessedLetters").text = guessedLetters.join("");
    }

    // function showLetter(char, str) {
    //     for (var i = 0; i < str.)
    // }


    //You Lose!
    // function gameLost() {
    //     $("#status").text = wordList[i]
    // }
    var hangMan = {
        startGame: function(){
            numGuesses = 10;
            
        }
    }

});
