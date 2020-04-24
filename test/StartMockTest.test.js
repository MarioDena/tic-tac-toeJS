import startMock from './StartMock';

const PlayerName = document.createElement('input');
const inputAttribute = document.createAttribute('id');
inputAttribute.value = 'first-player-mock';
PlayerName.setAttributeNode(inputAttribute);
const inputValue = document.createAttribute('value');
inputValue.value = 'John';
PlayerName.setAttributeNode(inputValue);

test('A new Player', () => {
  expect(startMock.name).toBe('John');
});

test('Return the symbol', () => {
  expect(startMock.symbol).toBe('O');
});