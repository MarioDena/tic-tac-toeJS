const startBoard = () => {
    getId('restart').style.display = 'none';
    getId('player-name').innerHTML = `${capitalize(player.name)} you go first`;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < innerCells.length; i++) {
        gameBoard[i] = i;
    }
    innerCells.forEach(cell => { cell.innerHTML = ''; cell.addEventListener('click', play.bind(this, cell.id), false); });
};