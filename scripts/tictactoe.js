const gameBoard = () => {
    //define the board array
    const _boardlayout = [];
    const wins = [];
    let countSet = 0;
    let playersTurn = 1;

    wins[0] = [[0, 0], [1, 0], [2, 0]];
    wins[1] = [[0, 1], [1, 1], [2, 1]];
    wins[2] = [[0, 2], [1, 2], [2, 2]];
    wins[3] = [[0, 0], [1, 1], [2, 2]];
    wins[4] = [[0, 0], [0, 1], [0, 2]];
    wins[5] = [[1, 0], [1, 1], [1, 2]];
    wins[6] = [[2, 0], [2, 1], [2, 2]];
    wins[7] = [[0, 2], [1, 1], [2, 0]];

    //reset function to clear the board
    const reset = () => {

        _boardlayout.length = 0;

        const rows = 3;
        const columns = 3;

        for (i = 0; i < rows; i++) {

            _boardlayout.push([]);
            for (j = 0; j < columns; j++) {

                _boardlayout[i].push([]);
            }
        }
    };

    //display the current array to the console.log
    const displayBoard = () => {
        console.log(_boardlayout)

        //console.log(wins)
    }

    // Update the selected cell. But first check if its already filled!
    // Also keep track of the number of sets. if 9 then game is over
    const updateCell = (player, marker, x, y) => {
        if (_boardlayout[x][y].length === 0) {
            console.log('zet!')
            countSet++;

            flipTurn();

            _boardlayout[x][y] = marker;
            winner = checkWin(marker);

            if (winner) {
                console.log(`${player}` + " WON!")

            }
            if (countSet === 9 & !winner) {
                console.log('No Winner!')
            }
        };
    }

    // if player 1 is done go to player 2, and vice versa
    const flipTurn = () => {
        if (playersTurn === 1) {
            playersTurn = 2;
        } else {
            playersTurn = 1;
        };
    };

    // Take a turn
    const takeTurn = (xCord, yCord) => {
        console.log(` Playerturn: ${playersTurn}`)

        if (playersTurn === 1) {
            updateCell(player1.name, player1.marker, xCord, yCord)
        } else {
            updateCell(player2.name, player2.marker, xCord, yCord)
        };
    }

    //check if we have a winner! if all the markers from the winning possibilaties are zet, then return win! 
    const checkWin = (marker) => {
        let win = false;

        for (i = 0; i < 8; i++) {
            let wincount = 0;
            for (j = 0; j < 3; j++) {

                filledInMarker = _boardlayout[[wins[i][j][0]]][[wins[i][j][1]]]

                if (filledInMarker === marker) {
                    wincount++;
                }
                if (wincount === 3) {
                    win = true
                }
            }
        }
        return (win);
    }

    return { reset, displayBoard, updateCell, takeTurn };

}

const takeTurn = (xCord, yCord) => {
    if (playersTurn === 1) {
        updateCell(player1.name, player1.marker, xCord, yCord)
    } else {
        updateCell(player2.name, player2.marker, xCord, yCord)
    };
}

const createPlayer = (name, marker) => {
    return { name, marker };

}

//function startGame() {
const board = gameBoard();
board.reset();


playerName = "Rene";
playerTag = "X";

const player1 = createPlayer(playerName, playerTag);

playerName = "Rita";
playerTag = "O";

const player2 = createPlayer(playerName, playerTag);

//}


//startGame();














