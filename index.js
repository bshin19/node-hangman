var Word = require("./word");
const randomWord = require('random-word');
const inquirer = require('inquirer');
var guesses, guessWord, gwStr;

/*The file containing the logic for the course of the game,
which depends on Word.js and:*/

function initGame() {
    //Randomly selects a word and uses the Word constructor to store it
    gwStr = randomWord();
    // uncomment the following line to cheat!
    //console.log(gwStr);
    guesses = gwStr.length;
    guessWord = new Word(gwStr);

    guessWord.getLetters();

    playGame();
};

function endPrompt() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'again',
            message: "Play Again?"
        }
    ]).then(function (response) {
        if (response.again) {
            initGame();
        };
    });
};

/*Prompts the user for each guess and 
keeps track of the user's remaining guesses */
function playGame() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'letter',
            message: "Enter a letter: "
        }
    ]).then(function (response) {
        guessWord.guess((response.letter));
        guesses--;

        if (!guessWord.dispLetter.includes("_ ")) {
            console.log("You win!");
            endPrompt();
        } else {
            if (guesses > 0) {
                console.log(guesses + " guesses remain.");
                playGame();
            } else {
                console.log("No guesses left. The answer was " + gwStr + ".");
                endPrompt();
            };
        };
    });
};

initGame();