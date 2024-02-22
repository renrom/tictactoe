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
            
            countSet++;

            flipTurn();

            _boardlayout[x][y] = marker;

            boardId = "row"+x+"col"+y
            
            var markerBoard = document.getElementById(boardId);


            markerBoard.innerHTML = marker;

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
    const takeTurn = (player1, player2, xCord, yCord) => {

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

const createPlayer = (name, marker) => {
    return { name, marker };
}

const startGame = () => {

    const board = gameBoard();
    board.reset();
    const dialog = document.getElementById("signinDialog");
    const btnStartGame = document.querySelector("#startgame")
    const row0col0 = document.getElementById("row0col0");
    const row0col1 = document.getElementById("row0col1");
    const row0col2 = document.getElementById("row0col2");
    const row1col0 = document.getElementById("row1col0");
    const row1col1 = document.getElementById("row1col1");
    const row1col2 = document.getElementById("row1col2");
    const row2col0 = document.getElementById("row2col0");
    const row2col1 = document.getElementById("row2col1");
    const row2col2 = document.getElementById("row2col2");
    

    let player1 = [];
    let player2 = [];

    dialog.showModal();

    btnStartGame.addEventListener("click", (e) => {
        playerName1 = document.getElementById("player1").value;
        playerName2 = document.getElementById("player2").value;

        e.preventDefault();
        player1 = createPlayer(playerName1, "X");
        player2 = createPlayer(playerName2, "O");

        dialog.close();

    });


    const rows = 3;
    const columns = 3;

    row0col0.addEventListener("click", () => {
        board.takeTurn(player1, player2, 0,0);
    });
    row0col1.addEventListener("click", () => {
        board.takeTurn(player1, player2, 0,1);
    });
    row0col2.addEventListener("click", () => {
        board.takeTurn(player1, player2, 0,2);
    });
    row1col0.addEventListener("click", () => {
        board.takeTurn(player1, player2, 1,0);
    });
    row1col1.addEventListener("click", () => {
        board.takeTurn(player1, player2, 1,1);
    });
    row1col2.addEventListener("click", () => {
        board.takeTurn(player1, player2, 1,2);
    });
    row2col0.addEventListener("click", () => {
        board.takeTurn(player1, player2, 2,0);
    });
    row2col1.addEventListener("click", () => {
        board.takeTurn(player1, player2, 2,1);
    });
    row2col2.addEventListener("click", () => {
        board.takeTurn(player1, player2, 2,2);
    });


};






function initGame() {
    const board = gameBoard();
    board.reset();
    askPlayers();
}

startGame();














