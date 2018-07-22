function Letter(letterInp) {
    this.character = letterInp,
    this.guessed = false, //true or false
    this.isGuessed = function() {
        if (this.guessed) {
            return (this.character);
        } else {
            var und = "_";
            return und;
        };
    },
    this.guessLetter = function(guess) {
        if (guess.toLowerCase() === this.character.toLowerCase()) {
            this.guessed = true;
            return (this.isGuessed(guess)) ;
        } else {
            return (this.isGuessed(guess));
        };
    };
};

//remove these when ready
// var test = new Letter("A", false);
// console.log(test.guessLetter("a"));

module.exports = Letter;