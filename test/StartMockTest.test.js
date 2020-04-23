import startMock  from './StartMock';

const PlayerName = document.createElement('input');
let inputAttribute = document.createAttribute('id');
inputAttribute.value = 'first-player-mock';
PlayerName.setAttributeNode(inputAttribute);
let inputValue = document.createAttribute('value');
inputValue.value = 'John';
PlayerName.setAttributeNode(inputValue);

test('A new Player', () => {
    expect(startMock.PlayerFactory.name).toBe('John');
});

test('Return the symbol', () => {
    expect(startMock.PlayerFactory.symbol).toBe('O');
});