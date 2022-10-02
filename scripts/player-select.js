let playerCount = 0;
let flag = 0;

function selectBtnDisable(playerBtnId) {
    const btnDisabled = document.getElementById(playerBtnId);
    btnDisabled.setAttribute('disabled', true);
    btnDisabled.style.backgroundColor = 'gray';
}

function firstPlayerNameSet(playerName) {
    document.getElementById('no-selection-yet').setAttribute('style', 'display: none;')
    const playersContainer = document.getElementById('players-container');
    const playersListCreate = document.createElement('ol');
    playersListCreate.setAttribute('id', 'players-list');
    const newPlayer = document.createElement('li');
    newPlayer.innerText = playerName;
    playersListCreate.appendChild(newPlayer);
    // nextPlayerNameSet(playerName);
    playersContainer.appendChild(playersListCreate);
}

function nextPlayerNameSet(playerName) {
    const playerList = document.getElementById('players-list');
    const newPlayer = document.createElement('li');
    newPlayer.innerText = playerName;
    playerList.appendChild(newPlayer);
}

function setNewPlayer(playerNameId, playerBtnId) {
    const playerName = getPlayerNameElementValueById(playerNameId);
    if (flag === 0) {
        firstPlayerNameSet(playerName);
    }
    else if (flag > 0 && flag < 5) {
        nextPlayerNameSet(playerName);
    }
    else if (flag >= 5) {
        alert('You cannot add more than 5 players');
        return;
    }
    selectBtnDisable(playerBtnId);
}

// const playerName = getPlayerNameElementValueById('player1-name');
// if (flag === 0) {
//     firstPlayerNameSet(playerName);
// }
// else if (flag > 0 && flag <= 5) {
//     nextPlayerNameSet(playerName);
// }
// else if (flag > 5) {
//     alert('You cannot add more than 5 players');
//     return;
// }
// selectBtnDisable('select-player-1');
document.getElementById('select-player-1').addEventListener('click', function () {
    setNewPlayer('player1-name', 'select-player-1');
    flag++;
});

document.getElementById('select-player-2').addEventListener('click', function () {
    setNewPlayer('player2-name', 'select-player-2');
    flag++;
});

document.getElementById('select-player-3').addEventListener('click', function () {
    setNewPlayer('player3-name', 'select-player-3');
    flag++;
});

document.getElementById('select-player-4').addEventListener('click', function () {
    setNewPlayer('player4-name', 'select-player-4');
    flag++;
});

document.getElementById('select-player-5').addEventListener('click', function () {
    setNewPlayer('player5-name', 'select-player-5');
    flag++;
});

document.getElementById('select-player-6').addEventListener('click', function () {
    setNewPlayer('player6-name', 'select-player-6');
    flag++;
});

document.getElementById('select-player-7').addEventListener('click', function () {
    setNewPlayer('player7-name', 'select-player-7');
    flag++;
});

document.getElementById('select-player-8').addEventListener('click', function () {
    setNewPlayer('player8-name', 'select-player-8');
    flag++;
});

document.getElementById('select-player-9').addEventListener('click', function () {
    setNewPlayer('player9-name', 'select-player-9');
    flag++;
});