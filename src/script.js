import PlayerFactory from "./factoryPlayer";

function getId(id) {
    return document.getElementById(id);
}

// eslint-disable-next-line no-unused-vars
window.displaySections = function (section) {
    const sectionID = getId(section);
    sectionID.style.display = 'none';
};
const gamefactory = () => {
    const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const innerCells = document.querySelectorAll('.inner-cell');
    let player;
    let turn = false;

    const checkWinningConditions = (playerChecked) => {
        const gameWinningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2],
        ];
        const playedConvos = gameBoard.reduce((acumulator, element, index) => (
            (element === playerChecked) ? acumulator.concat(index) : acumulator), []);
        let gameWon = null;
        gameWinningConditions.forEach(elem => {
            if (elem.every(win => playedConvos.indexOf(win) > -1)) {
                gameWon = playerChecked;
            }
        });
        return {
            gameWon,
        };
    };

    function checkForTie() {
        const playableCells = gameBoard.filter(cell => typeof cell === 'number');
        if (playableCells.length === 0) return true;
        return false;
    }

    function aiSelection(Symbol) {
        const currentBoard = gameBoard;
        const playableCells = gameBoard.filter(cell => typeof cell === 'number');
        if (checkWinningConditions('O').gameWon) {
            return { score: -10 };
            // eslint-disable-next-line no-else-return
        } else if (checkWinningConditions('X').gameWon) {
            return { score: 10 };
        } else if (playableCells.length === 0) {
            return { score: 0 };
        }

        const moves = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < playableCells.length; i++) {
            const move = {};
            move.index = gameBoard[playableCells[i]];
            currentBoard[playableCells[i]] = Symbol;

            if (Symbol === 'X') {
                const result = aiSelection('O');
                move.score = result.score;
            } else {
                const result = aiSelection('X');
                move.score = result.score;
            }
            currentBoard[playableCells[i]] = move.index;
            moves.push(move);
        }

        let bestMove;
        if (Symbol === 'X') {
            let bestScore = -10000;
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            let bestScore = 10000;
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

        return moves[bestMove];
    }

    const capitalize = (string) => {
        if (typeof string !== 'string') return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const alerts = () => {
        if (checkWinningConditions('O').gameWon){
            getId('check').innerText = `${capitalize(player.name)} you win!!`;
        }
        else if (checkWinningConditions('X').gameWon){
            getId('check').innerText = 'Computer wins!! :c';
        }
        else if (checkForTie() === true) {
            getId('check').innerText = 'It\'s a tie!!';
        }
    };

    const cpuPlay = () => {
        const cpuPlay = aiSelection('X').index;
        gameBoard[cpuPlay] = 'X';
        innerCells[cpuPlay].innerHTML = 'X';
        const gameOver = checkWinningConditions('X').gameWon;
        if (gameOver) {
            getId('restart').style.display = 'flex';
            alerts();
        }
        if (checkForTie() === true) {
            getId('restart').style.display = 'flex';
            alerts();
        }
    };

    const play = (cell) => {
        if (turn === false) {
            turn = true;
            getId('player-name').style.display = 'none';
        }
        if (typeof gameBoard[cell] === 'number') {
            const gameOver = checkWinningConditions(player.symbol).gameWon;
            // eslint-disable-next-line no-unused-expressions
            gameOver ? getId('restart').style.display = 'flex' : (gameBoard[cell] = player.symbol, innerCells[cell].innerHTML = player.symbol);
            // eslint-disable-next-line no-unused-expressions
            checkForTie() === true ? getId('restart').style.display = 'flex' : cpuPlay();
            alerts();
        }
    };

    const startBoard = () => {
        getId('restart').style.display = 'none';
        getId('player-name').innerHTML = `${capitalize(player.name)} you go first`;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < innerCells.length; i++) {
            gameBoard[i] = i;
        }
        innerCells.forEach(cell => { cell.innerHTML = ''; cell.addEventListener('click', play.bind(this, cell.id), false); });
    };

    const restart = () => {
        startBoard();
    };

    const start = (name = getId('first-player').value) => {
        player = new PlayerFactory(name, 'O');
        restart();
        return player;
    };


    return {
        start, restart, play, gameBoard
    };

};
export default gamefactory();
const game = gamefactory();
// eslint-disable-next-line no-unused-vars
window.game = gamefactory();