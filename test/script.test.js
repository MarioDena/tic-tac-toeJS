// eslint-disable-next-line import/no-unresolved
import 'babel-polyfill';
// eslint-disable-next-line import/no-unresolved
import '@testing-library/jest-dom/extend-expect';
// eslint-disable-next-line import/no-unresolved
import { AsyncWindow } from 'happy-dom';
// eslint-disable-next-line import/no-unresolved
import { queryByTestId } from '@testing-library/dom';
import gamefactory from '../src/script';
import { PlayerName } from './variables';

const inputValue = document.createAttribute('value');
inputValue.value = 'John';
PlayerName.setAttributeNode(inputValue);
const newGame = gamefactory.start(`${PlayerName.value}`);

test('Start with a new player.', () => {
  expect(newGame).toEqual({ name: 'John', symbol: 'O' });
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


describe('Test restart/startBoard functions.', () => {
  it('checks the presence and the state of the elements in the document. ', () => {
    const window = new AsyncWindow();
    window.document.body.innerHTML = `
        <div id="myTestContainer" class="myTestContainer" onclick="game.start(); game.restart('myTestContainer')">Restart Test</div>
        <h3 id="player-name" class="player-name">jkdns</h3>
        `;
    const newRestart = gamefactory.restart('myTestContainer', 'player-name');
    expect(newRestart.buttonRestart.style.display).toBe('none');
    expect(newRestart.spanPlayerName.innerHTML).toBe('John you go first');
    expect(newRestart.cells.length).toBe(0);
    const myTestContainer = document.querySelector('#myTestContainer');
    expect(myTestContainer.style.display).toBe('none');
    // eslint-disable-next-line no-unused-vars
    const testingButton = expect(`${myTestContainer}`).not.toBeVisible;
    const playerName = queryByTestId(document.documentElement, 'player-name');
    // eslint-disable-next-line no-unused-vars
    const testingSpan = expect(`${playerName}`).toBeVisible;
  });
  it('should throw a cannot read property \'style\' of null type of error.', () => {
    expect.assertions(2);
    try {
      gamefactory.restart();
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
      expect(error).toHaveProperty('message', 'Cannot read property \'style\' of null');
    }
  });
});

describe('Test checkForWinningConditions and checkForTie functions inside play function in gameFactory.', () => {
  it('Testing for complete game play.', () => {
    const window = new AsyncWindow();
    window.document.body.innerHTML = `
            <h3 id="player-name" class="player-name">jkdns</h3>
            <div class="board-section" id="board-section">
                <div class="inner-cell" id="0" onclick="game.play()"></div>
                <div class="inner-cell" id="1" onclick="game.play()"></div>
                <div class="inner-cell" id="2" onclick="game.play()"></div>
                <div class="inner-cell" id="3" onclick="game.play()"></div>
                <div class="inner-cell" id="4" onclick="game.play()"></div>
                <div class="inner-cell" id="5" onclick="game.play()"></div>
                <div class="inner-cell" id="6" onclick="game.play()"></div>
                <div class="inner-cell" id="7" onclick="game.play()"></div>
                <div class="inner-cell" id="8" onclick="game.play()"></div>
        </div>
        `;
    const newPlayGame = gamefactory.play();
    const myTestCells = document.querySelector('.inner-cell');


    expect(myTestCells).toBeVisible();
    expect(newPlayGame.gameBoard.length).toBe(9);
    expect(newPlayGame.innerCells.length).toBe(9);
    expect(newPlayGame.gameBoard[2]).toBe(2);
    expect(gamefactory.play().checkWinningConditions()).toStrictEqual({ gameWon: null });
    /*
    expect(newPlayGame.cpuPlay()).toBe('');
        expect(gamefactory.play(2).gameBoard).toStrictEqual([0, 1, 'O', 3, 4, 5, 6, 7, 8]);
        expect(gamefactory.play(2).gameBoard[2]).toStrictEqual('O'); */
  });
  it('checks if the function throw errors.', async () => {
    expect(() => gamefactory.play()).not.toThrow();
    /*
    expect(() => gamefactory.play('2')).not.toThrow(); */
  });
});
