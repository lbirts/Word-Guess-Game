$(document).ready(function() {
    //Global
    var wordList = ["pencil", "calculator", "notebook", "pen", "binder", "paper", "textbook", "laptop", "highlighter", "planner", "flashcards"];
    var storeWord = [];
    //var blanks = 0;
    var progressWord = [];
    var guessedLetters = [];
    var userGuess = "";
    var currentWord = "";
    //Counters
    var wins = 0;
    var loses = 0;
    var numGuesses = 0;
    var correctGuess = false;

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
        for (var i = 0; i < currentWord.length; i++) {
            progressWord[i] = " __ ";
        }
        document.getElementById("currentWord").textContent = progressWord.join("");
        console.log(progressWord)
    }

    function winsAndLoses() {
        $("#totalwins").text = wins;
        $("#totalLoses").text = loses;
    }

    // Resets Game
    function resetGame() {
        numGuesses = currentWord.length + 3;
        guessedLetters = [];
        currentWord = [];
        correctGuess = false;
        generateRandom();
        showBlank();
    }

    resetGame();
    winsAndLoses();

    
    
    

    // display results
    function getResults() {
        $("#remainingGuesses").text = numGuesses;
        //$("#currentWord").text = progressWord.join("");
        $("#guessedLetters").text = guessedLetters.join("");
    }

   //Execution
    generateRandom();
    showBlank();
    resetGame();
    getResults();

    

    function initialGame () {
        letters = [];
        progressWord = [];
        guessedLetters = [];
        userGuess = "";
        chosen = "";
        numGuesses = 10;
        random();
        showBlank;
    }

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
