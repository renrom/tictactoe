
const gameBoard = () => {

    //define the board array
    const _boardlayout = [];
    const wins = [];
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

    //Update the selected cell.
    const updateCell = (marker, x, y) => {
        _boardlayout[x][y] = marker;
        if (checkWin(marker)) {
            console.log("WINNER")
        };

    }

    const checkWin = (marker) => {
        let win = false;
        
        for (i = 0; i < 8; i++) {
            let wincount = 0;
            for (j = 0 ;j < 3;j++) {

                test3 = _boardlayout[[wins[i][j][0]]][[wins[i][j][1]]]
                             
            
                if (test3 === marker) {
                    wincount++;
                }
               
                if (wincount === 3) {
                    win = true
                }
                
            }
        }

        return (win);
    }

    return { reset, displayBoard, updateCell };

}

const createPlayer = (name, mark) => {
    const sayHello = () => console.log("hello");
    return { name, mark, sayHello };

}

//function startGame() {
const board = gameBoard();
board.reset();

const player1 = createPlayer("Player1", "X");
const player2 = createPlayer("Player2", "O");


//}


//startGame();














