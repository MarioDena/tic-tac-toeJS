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

  const play = (cell) => {
    gameBoard[cell] = player.symbol;
    innerCells[cell].innerHTML = player.symbol;
  };

  const startBoard = () => {
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

const game = gamefactory();
