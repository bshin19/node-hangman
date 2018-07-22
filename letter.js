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

/*If you name your letter's display function toString, 
JavaScript will call that function automatically whenever
 casting that object to a string
  (check out this example: 
    https://jsbin.com/facawetume/edit?js,console)*/

module.exports = Letter;