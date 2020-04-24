import gamefactory from "../src/script";
import {PlayerName, restartButton} from './variables'
import '@testing-library/jest-dom/extend-expect';

let inputValue = document.createAttribute('value');
inputValue.value = 'John';
PlayerName.setAttributeNode(inputValue);
let newGame = gamefactory.start(`${PlayerName.value}`);

test('Start with a new player.', () => {
    expect(newGame).toEqual({ 'name': 'John', 'symbol': 'O'});
});

test('Returns player name accessing through start().', () => {
    expect(newGame.name).toBe('John');
});

test('Returns player symbol.', () => {
    expect(newGame.symbol).toBe('O');
});

test('Returns player symbol.', () => {
    expect(newGame.symbol).toBe('O');
});

test('Returns player symbol.', () => {
    expect(newGame.symbol).toBe('O');
});
