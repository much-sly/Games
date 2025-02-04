/*
Creating a TicTacToe board.
*/ 
let readlineSync = require('readline-sync');


class TicTacToe {
    constructor(empty){
        // let emptyspace = empty;
        if (empty === ''){
            empty = ' ';
        }
        this.empty = empty;
        // option 1
        this.board = [
            [empty, empty, empty],
            [empty, empty, empty],
            [empty, empty, empty],
        ];

        // option 2
        // const board = [];
        // for(let i = 0; i < 3; i++) board.push(`${empty}`.repeat(3).split(''));
        //     this.board = board;
    }

    // getter function for empty spaces on the board
    get emptyspaces (){
        let spaces = 0;
        // iterate over each row
        for(let i = 0; i< this.board.length; i++){
            const row = this.board[i];

            //iterate over each column in the row
            for(let j = 0; j < row.length; j++){
                const colVal = row[j]

                // if the value is an empty space, count it
                if (colVal === this.empty) spaces++;
            }
        }
        return spaces;
    }
    // randomly selects empty spaces on the board
    randomlySelectOpenBoardSpaces(){
        const emptyspaces = []
        // scan board to collect all empty spaces
        for (let i = 0; i < this.board.length; i++){
            for (let j = 0; j < this.board[i].length; j++){
                // store empty spaces
                if(this.board[i][j] === this.empty){
                    emptyspaces.push({row: i, column: j})
                }
            }
        }
        return emptyspaces[Math.floor(Math.random()* emptyspaces.length)];
    }

    // print out a board that is not flat
    printBoard (){
        const board = this.board;
        console.log('\nBoard Below:')
        for(let i = 0; i<board.length; i++){
            console.log(board[i]);
        }
        console.log();
    }

    // allows you to mark the board on a specific place
    takeTurn (mark, row, column){
        if(this.board[row][column] === this.empty){
        this.board[row][column] = mark;
        }
    }
// Determines whether a specific player has won the game
    whoIsWinner(){
        let Winner = null;

        ///////
        // rows
        ////

        // check whether anyone has won along the rows
        for (let i = 0; i<this.board.length; i++){
            const row = this.board[i]

            // check if 3 values are present in this row
            Winner = count3SameValues(row);
            if (Winner !== null) return Winner;
        }

        //////
        // diagonals
        //////

        //check if anyone has won along the diagonals
        const southEastDiagonal = [
            this.board[0][0], this.board[1][1], this.board[2][2]
        ]
        Winner = count3SameValues(southEastDiagonal);
        if (Winner !== null) return Winner;

        // check for the North Eat Diagonal
        const northEastDiagonal = [
            this.board[2][0], this.board[1][1], this.board[0][2]
        ]
        Winner = count3SameValues(northEastDiagonal);
        if (Winner !== null) return Winner;

        ///////////
        //columns
        //////

        // check if anyone has won along the columns
        for (let i = 0; i < 3; i++){
            const colvalues = []
            for (let j = 0; j < 3; j++){
                colvalues.push(this.board[j][i])
            }
            Winner = count3SameValues(colvalues);
            if (Winner !== null) return Winner;
        }
        
        // if we reached here means we didn't have a winner
        return Winner;
    }
}

// this function checks whether x and o are present in an element
const count3SameValues = arr =>{
    let xcount = 0;
    let ocount = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'x') xcount++;
        else if (arr[i] === 'o') ocount++;
    }
    // check if anybody has won
    if (xcount === 3) return 'x';
    else if (ocount=== 3) return 'o';

    return null;
}

// Ask for user's empty space character.
let emptyChar = readlineSync.question(
    'What character should we use for the board:'
);

// create a new board using the empty space the user provided
const Game = new TicTacToe(emptyChar);
Game.printBoard();

//No winner by default
let Winner = null;

// Keep track of when to take user's turn
let isUserTurn = true;

// loop whike there is no winner and there are spaces remaining
while(Winner === null && Game.emptyspaces > 0){
    //check for user turn
    if (isUserTurn){
        let userMove = readlineSync.question(
            'Where would you like to go (0 2): '
        ).split(' ')
        const rowMove = +userMove[0]
        const colMove = +userMove[1]
        Game.takeTurn('x', rowMove, colMove);
    }

    // Otherwise the computer takes a move 
    else {
        // force computer to take a move
        let computerMove = Game.randomlySelectOpenBoardSpaces();
        console.log('computer moves')
        Game.takeTurn('o', computerMove.row, computerMove.column);
        
    }
    // print board, update user turn boolean
    Game.printBoard();
    isUserTurn = !isUserTurn;
    Winner = Game.whoIsWinner()
}
// if somebody won congratulate them
if (Winner !== null) console.log(`Congratulations ${Winner}, You Won!`);
else console.log('Yikes! You are both so terrible, maybe next time?')