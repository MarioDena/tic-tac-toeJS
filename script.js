function getId(id) {
  return document.getElementById(id);
}

// eslint-disable-next-line no-unused-vars
function displaySections(section) {
  const sectionID = getId(section);
  sectionID.style.display = 'none';
}

class PlayerFactory {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }
}

const gamefactory = () => {
  const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const innerCells = document.querySelectorAll('.inner-cell');
  let player;

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

  const play = (cell) => {
    const gameOver = checkWinningConditions(player.symbol).gameWon;
    // eslint-disable-next-line no-unused-expressions
    gameOver ? getId('restart').style.display = 'block' : (gameBoard[cell] = player.symbol, innerCells[cell].innerHTML = player.symbol);
  };

  const startBoard = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < innerCells.length; i++) {
      gameBoard[i] = i;
    }
    innerCells.forEach(cell => { cell.innerHTML = ''; cell.addEventListener('click', play.bind(this, cell.id), false); });
  };

  const start = () => {
    player = new PlayerFactory(getId('first-player').value, 'O');
    startBoard();
  };

  const restart = () => {
    startBoard();
  };

  return {
    start, restart, play, gameBoard,
  };
};

// eslint-disable-next-line no-unused-vars
const game = gamefactory();
