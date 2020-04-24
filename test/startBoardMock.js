import * as test from '../script';

const startBoard = () => {
  test.getId('restart').style.display = 'none';
  test.getId('player-name').innerHTML = `${test.capitalize(player.name)} you go first`;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < innerCells.length; i++) {
    gameBoard[i] = i;
  }
  // eslint-disable-next-line no-undef
  innerCells.forEach(cell => { cell.innerHTML = ''; cell.addEventListener('click', play.bind(this, cell.id), false); });
};