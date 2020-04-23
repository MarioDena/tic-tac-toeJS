import PlayerFactoryMock  from './PlayerFactoryMock';

const PlayerName = document.createElement('input');
let inputAttribute = document.createAttribute('id');
inputAttribute.value = 'first-player-mock';
PlayerName.setAttributeNode(inputAttribute);
let inputValue = document.createAttribute('value');
inputValue.value = 'John';
PlayerName.setAttributeNode(inputValue);
console.log(PlayerName.value);

let player = document.getElementById('first-player-mock');

const startMock = () => {
    return new PlayerFactoryMock(player.value , 'O');
};

export default startMock();