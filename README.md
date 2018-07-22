# Node.js Hangman

## Overview
This application runs off the terminal/command line and heavily utilizes node.js.
+ First, the function initGame is run, which grabs a word from the random-word node package.
  * The length of the word determines how many guesses the user has available.
+ This word is run through two constructors:
  * Word()
  * Letter()
  * These transform the word string into an object and include functions for updating and searching the word object.
+ Then it prompts the user for input via the inquirer node package.
  * Currently, the user can insert any character or combination of characters as input.
  * This is not the intended behavior and may be fixed in a future update.

+ The user guesses letters until they run out of guesses or have guessed the entire word.
+ At this point, a new inquirer call is run, asking for a boolean t/f for playing the game again.
+ If the user answers true, initGame runs, grabbing a new word and resetting the number of guesses available.

## Underlying technologies
+ Javascript 
+ Node.js 
  * random-word
  * inquirer