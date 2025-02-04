let readlineSync = require('readline-sync');

// Wait for user's response.
let userName = readlineSync.question('Enter player name:');
console.log(`Welcome ${userName}!`);

// make board for player
const playerBoard = [];
const rowCount = 3;
const columnCount = 3;
// add rows
for (let i = 0; i< rowCount; i++){
    playerBoard.push([])
    // add a column
    for (let j = 0; j<columnCount; j++){
        playerBoard[i].push('-')
    }
};


// ask user to guess a certain number of times
const maxGuesses = 3;
let userGuessesRemaining =maxGuesses;

// place ship randomly
const shipRow = Math.floor(Math.random()*rowCount) +0;
const shipColumn = Math.floor(Math.random()*columnCount) +0;

//loop until game is over
while (userGuessesRemaining > 0){
    console.log(`next turn, Guesses remaining: ${userGuessesRemaining}`);


    //Ask the user for their next move
    let nextMove = readlineSync.question(
        'Enter your next move:(1,2 means row 1, column 2)')
        .split(',');

        // extract guesses to something we can use for array indexing
        let rowGuess = +nextMove[0];
        let columnGuess = +nextMove[1];

          // check if user has hit ship
        const hitShip = shipRow && columnGuess === shipColumn;
        if (hitShip){
            console.log('YOU HIT THE SHIP!');

            // mark the users guess on the board
            playerBoard[rowGuess][columnGuess] = 's'

        }
        // Tell user they missed
        else{
            console.log('whoop! Try again?')
        }

        // mark the users guess on the board
        playerBoard[rowGuess][columnGuess] = 'x'

        // print out the board
        for (let i = 0; i< rowCount; i++){
            console.log(playerBoard[i])
        }

        // finish the game if the user hit the ship
        if (hitShip){
            break;
        }
        // turn is over decrement guess
    userGuessesRemaining -=1;
}
// check if user has any guesses remaining to use if they have won
if (userGuessesRemaining > 0){
    console.log('YEII YOU WIN');
}
else {
    console.log('YIKES MAYBE NEXT TIME?');
    // mark ship to show user where the winning position was
    playerBoard[shipRow][shipColumn] = 'S'
     // print out the board
    for (let i = 0; i< rowCount; i++){
        console.log(playerBoard[i])
    }

}
