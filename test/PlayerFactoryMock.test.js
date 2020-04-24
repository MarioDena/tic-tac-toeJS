import PlayerFactoryMock from './PlayerFactoryMock';

const newPlayer = new PlayerFactoryMock('John', 'O');
const newPlayerName = newPlayer.name;
const newPlayerSymbol = newPlayer.symbol;

test('Return the name of a new player', () => {
  expect(newPlayerName).toBe('John');
});

test('Return the symbol', () => {
  expect(newPlayerSymbol).toBe('O');
});