import gamefactory from '../src/script';
import { PlayerName } from './variables';

const inputValue = document.createAttribute('value');
inputValue.value = 'John';
PlayerName.setAttributeNode(inputValue);
const divNeeded = document.createElement('div');
divNeeded.id = 'restart';
const playerName = document.createElement('div');
playerName.id = 'player-name';
document.body.append(divNeeded, playerName);
const newGame = gamefactory.start(`${PlayerName.value}`);

test('Start with a new player.', () => {
  expect(newGame).toEqual({ name: 'John', symbol: 'O' });
});
