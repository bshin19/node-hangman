var Letter = require("./letter");

/* Contains a constructor, Word that 
depends on the Letter constructor.
This is used to create an object 
representing the current word the 
user is attempting to guess. That 
means the constructor should define: */
function Word(randomWord) {
    //An array of new Letter objects representing the letters of the underlying word
    this.templetters = randomWord.split("");
    this.letters = [];
    this.dispLetter = "";
    for (var i = 0; i < this.templetters.length; i++) {
        var templobj = new Letter(this.templetters[i]);
        this.letters.push(templobj);
    };

    /* A function that returns a string representing the word.
     This should call the function on each letter object
      (the first function defined in Letter.js) that displays 
      the character or an underscore and concatenate those 
      together. */
    this.getLetters = function () {
        this.displetter = "";
        for (var i = 0; i < this.letters.length; i++) {
            this.dispLetter += this.letters[i].isGuessed() + " ";
        };
        console.log(this.dispLetter);
    };
    /*A function that takes a character as an argument 
    and calls the guess function on each letter object 
    (the second function defined in Letter.js)*/
    this.guess = function (guess) {
        this.dispLetter = ""
        for (var i = 0; i < this.letters.length; i++) {
            var tempL = this.letters[i].guessLetter(guess) + " ";
            this.dispLetter += tempL;
        };
        console.log(this.dispLetter);
    };
};

// var hello = new Word("Hello");
// hello.getLetters();
// hello.guess("l");
module.exports = Word;