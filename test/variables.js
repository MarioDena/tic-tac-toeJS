const PlayerName = document.createElement('input');
let inputType = document.createAttribute('type');
inputType.value = 'text';
PlayerName.setAttributeNode(inputType);
let inputAttribute = document.createAttribute('id');
inputAttribute.value = 'first-player';
PlayerName.setAttributeNode(inputAttribute);


const restartButton = document.createElement('button');
let restartBtnId  = document.createAttribute('id');
restartBtnId.value = 'restart';
restartButton.setAttributeNode(restartBtnId);



export {
    PlayerName,
    restartButton
}