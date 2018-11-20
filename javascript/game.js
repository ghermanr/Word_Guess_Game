// Set word array

var wordArray = [
    "football",
    "basketball",
    "hockey",
    "soccer",
    "rugby",
];


//Set variables for wins, losses, guesses, and empty variable for user input 
var winNumber = 0;
var guessCount = 15;
var guessLetters = [];

var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var wordLength = randomWord.length;
var underscores = "";
console.log(randomWord);

for (i=0; i<wordLength; i++){
    underscores = underscores + "_ "
}

//Function - on key press, log key and
document.onkeypress = function (event) {
    var userGuess = event.key;

    //Update the user input array    
    guessLetters.push(userGuess);

    //If user guesses the right letter win count goes up, guess number resets to 9, user guess array is emptied    
    if (userGuess === randomWord) {
        winNumber++;
        guessCount = 9;
        guessLetters = [];
        

    //If user guess is wrong the guess number goes down    
    } else {
        guessCount--;
    }

    //Once the guess number hits 0 the loss number goes up by one, and the guess number and user guess array are reset
    if (guessCount === 0) {
        guessCount = 15;
        guessLetters = [];
        
    }

    document.getElementById('winCount').innerHTML = winNumber;
    document.getElementById('randomWord').innerHTML = underscores;
    document.getElementById('guessCount').innerHTML = guessCount;
    document.getElementById('guessLetters').innerHTML = guessLetters;
}



