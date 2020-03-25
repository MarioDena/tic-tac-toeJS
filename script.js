function getId(id) {
    return document.getElementById(id)
}

function displaySections() {
    const h_s = getId('header-section');

    if ((h_s.style.display ===  'block' || 'flex')) {
        h_s.style.display = 'none';
        }
    else {
        h_s.style.display = 'block';
    }
}

function displaySecondSection() {
    const o_s = getId('names-section');

    if ((o_s.style.display ===  'block' || 'flex')) {
        o_s.style.display = 'none';
    }
    else {
        o_s.style.display = 'block';
    }
}

function displayThirdSection() {
    const o_s = getId('options-section');

    if ((o_s.style.display ===  'block' || 'flex')) {
        o_s.style.display = 'none';
    }
    else {
        o_s.style.display = 'block';
    }
}

function getValue() {
    let choseOption = '';
    choseOption = getId('chose-option-x').innerText;
    console.log(choseOption);
}

function getSecondValue() {
    let choseOption = '';
    choseOption = getId('chose-option-o').innerText;
    console.log(choseOption);
}

function getName() {
    let $jsName = document.querySelector('.input-f-p-n');
    let $jsValue = document.querySelector('.jsValue');

    $jsName.addEventListener('input', function(event){
        $jsValue.innerHTML = $jsName.value;
    }, false);
}

let gameBoard =(() => {
    let gameboard = ['', '', '', '', '', '', '', '', ''];
});



