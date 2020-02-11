$(document).ready(function() {
    //Global
    var wordList = ["pencil", "calculator", "notebook", "pen", "binder", "paper", "textbook", "laptop", "highlighter", "planner", "flashcards"];
    var storeWord = [];
    var blanks = 0;
    var progressWord = [];
    var guessedLetters = [];
    var guess = "";
    var currentWord = "";
    var correctGuess = false;
    var letterFound = false;
    var answer = [];
    var compareAnswer = "";
    var random;

    //Counters
    var wins = 0;
    var losses = 0;
    var numGuesses = 0;
    

    //random word
    function generateRandom() {
        random = Math.floor(Math.random() * wordList.length);
        currentWord = wordList[random];
        console.log(currentWord);
        // var n = currentWord.length;
        console.log(currentWord.length);
    }

    // blank start
    function showBlank () {
        for (var a = 0; a < currentWord.length; a++) {
            progressWord.push(" _ ");
            answer.push(currentWord[a]);
        }
        $("#progress").text(progressWord.join(""));
        console.log(progressWord)
        compareAnswer = answer.join("");
    }

    //wins 
    function gameWon() {
        $("#totalWins").text = wins++;
        $("#status").text("Congratulations!!!");
    }

    // Loses 
    function gameLost() {
        $("#totalLoses").text = losses++;
        $("#status").text("Awe too bad, the word was " + currentWord);
    }

    // display results
    function getResults() {
        $("#remainingGuesses").text(numGuesses);
        $("#currentWord").text(progressWord.join(""));
        $("#guessedLetters").text(guessedLetters.join(""));
        $("#totalWins").text(wins);
        $("#totalLoses").text(losses);
    }

    // Resets Game
     function resetGame() {
        currentWord = [];
        progressWord = [];
        guessedLetters = [];
        correctGuess = false;
        generateRandom();
        showBlank();
        numGuesses = currentWord.length + 3;
    }

    resetGame();
    getResults();

    //check Win
    function checkWin() {
        var wordGuess = $("#progress").text();
            if (wordGuess === compareAnswer) {
                correctGuess = true;
                if (correctGuess) {
                    gameWon();
                    getResults();
                }
                else {
                    gameLost();
                    getResults();
                }
            }
    }

    //check Loss
    function checkLoss() {
        if (numGuesses === 0) {
            gameLost();
            resetGame();
        }
    }



    document.onkeyup = function(event) {
        if (isAlpha(event.key)) {
            guess = event.key.toLowerCase();
            console.log(guess);
            checkLetter();
            replaceLetters();
            getResults();
            checkLoss();
            checkWin();
        }
    }

    // check letter
    function checkLetter() {
        if (currentWord.indexOf(guess) < 0) {
            numGuesses--;
        }
            if (guessedLetters.indexOf(guess) < 0) {
                guessedLetters.push(guess + ", ");
                letterFound = false;
            } else if (guessedLetters.includes(guess)) {
                return;
            }
    }

    function replaceLetters () {
        for (let b = 0; b < currentWord.length; b++) {
            if (guess === currentWord[b]) {
                progressWord[b] = guess;
                $("#progress").text(progressWord.join(""));
                letterFound = true;
            }
            if (progressWord.join("") === currentWord) {
                gameWon();
                resetGame();
            }
        }
    }
    
      // Check in keypressed is between A-Z or a-z, used this site for the below expression.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    function isAlpha (ch){
        return /^[A-Z]$/i.test(ch);
    }
   

    // function endGame() {
    //     if (currentWord.toString() === progressWord.toString()) {
    //         gameWon();
    //     }
    //     else if (numGuesses === 0) {
    //         gameLost();
    //     }
    // }


    // // function showLetter(char, str) {
    // //     for (var i = 0; i < str.)
    // // }

});
