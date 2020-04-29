const PlayerName = document.createElement('input');
const inputType = document.createAttribute('type');
inputType.value = 'text';
PlayerName.setAttributeNode(inputType);
const inputAttribute = document.createAttribute('id');
inputAttribute.value = 'first-player';
PlayerName.setAttributeNode(inputAttribute);


const restartButton = document.createElement('button');
const restartBtnId = document.createAttribute('id');
restartBtnId.value = 'restart';
restartButton.setAttributeNode(restartBtnId);


export {
  PlayerName,
  restartButton,
};