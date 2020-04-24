import PlayerFactory  from '../src/factoryPlayer';

let newPlayer = new PlayerFactory('John');
const newPlayerName = newPlayer.name;
const newPlayerSymbol = newPlayer.symbol;

test('Return the name of a new player', () => {
    expect(newPlayerName).toBe('John');
});

test('Return the symbol of the new player', () => {
    expect(newPlayerSymbol).toBe('O');
});