$(document).ready(function() {
    //Global
    var wordList = ["pencil", "calculator", "notebook", "pen", "binder", "paper", "textbook", "laptop", "highlighter", "planner", "flashcards"];
    var storeWord = [];
    var blanks = 0;
    var progressWord = [];
    var guessedLetters = [];
    var guess = "";
    var currentWord = "";
    var random = "";
    var correctGuess = false;
    var letterFound = false;

    //Counters
    var wins = 0;
    var losses = 0;
    var numGuesses = 0;

    //Print Results
    function getResults() {
        $("#remainingGuesses").text = numGuesses;
        $("#currentWord").text = progressWord.join("");
        $("#guessedLetters").text = guessedLetters.join("");
    }

     //Wins
     function gameWon() {
        wins++;
        $("#staus").text("Congratulations!!");
        $("#totalWins").text(wins);
    }

    //Loses
    function gameLost() {
        loses--;
        $("#status").text("Awe too bad, the word was " + currentWord);
        $("#totalLoses").text(loses);
    }

    var hangman = {
        startGame: function() {
            random = Math.floor(Math.random() * wordList.length);
            currentWord = wordList[random]
            numGuesses = currentWord.length + 3;
            for (let a = 0; a < currentWord.length; a++) {
                progressWord.push(" __ ");
            }
            getResults();
        },
        checkLetters: function() {
            let letterFound = false;
            for (var b = 0; b < currentWord.length; b++) {
                if (random[b] === currentWord) {
                    letterFound = true;
                }
            }
                if (letterFound) {
                    for (let c = 0; c < currentWord.length; c++) {
                        if (random[c] === currentWord) {
                            progressWord[b] = currentWord 
                        }
                    }
                }
                        else {
                            guessedLetters.push(currentWord);
                            numGuesses--;
                        }
                    },
        endGame: function() {
            getResults();
            if (currentWord.toString() === progressWord.toString()) {
                gameWon();
            }
            else if (numGuesses === 0) {
                gameLost();
            }
        }
    };
    
    // call the game
    hangman.startGame();

    document.onkeyup = function(event) {
        guess = event.key.toLowerCase()
        console.log(guess);
        hangman.checkLetters(guess);
        hangman.endGame();
    };

    

    // //Random Word
    // function generateRandom() {
    //     var random = Math.floor(Math.random() * wordList.length);
    //     currentWord = wordList[random];
    //     console.log(currentWord);
    //     console.log(currentWord.length);
    // }
    // generateRandom();

    // //Blank Start
    // function showBlanks() {
    //     for (let a = 0; a < currentWord.length; a++) {
    //         progressWord[a] = " __ ";
    //     }
    //     $("#progress").text(progressWord.join(""));
    //     console.log(progressWord);
    // }
    // showBlanks();

    // // display results
    

   
});