import PlayerFactoryMock from './PlayerFactoryMock';

const PlayerName = document.createElement('input');
const inputAttribute = document.createAttribute('id');
inputAttribute.value = 'first-player-mock';
PlayerName.setAttributeNode(inputAttribute);
const inputValue = document.createAttribute('value');
inputValue.value = 'John';
PlayerName.setAttributeNode(inputValue);

const startMock = () => new PlayerFactoryMock(PlayerName.value, 'O');

export default startMock();