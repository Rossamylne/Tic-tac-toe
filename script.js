function restartGame() {
    gameInfo.forEach(divInfo => {
        divInfo.isCasePlayable = true;
        divInfo.playState = undefined;
    });

    gameEnded = false;
    counter = 0;
    whichPlayerTurn = "red";
    playerTurnHelp.textContent = `It's ${whichPlayerTurn} turn`;

    gameCases.forEach(div => {
        div.style.cssText = "background-color: #FCD5CE";
    });
}



function caseInfo(caseid, boolean) {
    this.caseid = caseid;
    this.isCasePlayable = boolean;
    this.playState = undefined;
}

function gameInfoConstructor(object, key) {
    this.object[key] = object;
}



const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
    ];


const choosePlayerButton = document.querySelector('#choose-player-button');
const playerForm = document.querySelector('.player-form');
const confirmPlayerButton = document.querySelector('.confirm-player');
const playerTurnHelp = document.querySelector('#player-turn-help');
var playable = false;
var whichPlayerTurn = "red";
var counter = 0;
const restartButton = document.querySelector('#restart');

choosePlayerButton.addEventListener('click', () => {
    playerForm.style.cssText = "display: block;"
});


confirmPlayerButton.addEventListener('click', () => {
    const playerOneName = document.querySelector('#player1Name').value;
    const playerTwoName = document.querySelector('#player2Name').value;
    if (playerOneName && playerTwoName) {
        playerForm.style.cssText = "display: none;"
        playable = true;
        playerTurnHelp.textContent = `It's ${whichPlayerTurn} turn`;
    } else {
        alert("Please choose players");
    }
})


const gameInfo = [];
const gameCases = document.querySelectorAll('.game-case');
let gameEnded = false;

gameCases.forEach((div, index) => {
    const divInfo = new caseInfo(div.id, true);
    gameInfo.push(divInfo);
    console.log(gameInfo);
    div.addEventListener('click', () => {
        if (gameEnded) {
            return;
        }

        if (!playable) {
            alert("Please choose players");
        } else if (counter < 9 && divInfo["isCasePlayable"]) {
            divInfo["isCasePlayable"] = false;
            divInfo["playState"] = whichPlayerTurn;
            counter++;
            whichPlayerTurn = whichPlayerTurn === "red" ? "blue" : "red";
            playerTurnHelp.textContent = `It's ${whichPlayerTurn} turn`;
            div.style.backgroundColor = divInfo["playState"] === "red" ? "red" : "#00a8e8";

            for (const combination of winCombinations) {
                console.log("bdjgfbdjbwfkvdwbb");
                const [a, b, c] = combination;
                if (
                    gameInfo[a].playState === gameInfo[b].playState &&
                    gameInfo[b].playState === gameInfo[c].playState &&
                    gameInfo[a].playState !== undefined
                ) {
                    playerTurnHelp.textContent = `${gameInfo[a].playState.toUpperCase()} wins!`;
                    gameEnded = true;
                    break;
                }
            }

            if (!gameEnded && counter === 9) {
                playerTurnHelp.textContent = "Tie Game";
            }
        } else if (counter < 9) {
            alert("Please choose a playable case");
        }
    });
});

restartButton.addEventListener('click', restartGame);


/* gameInfo.forEach(divInfo => {
        divInfo.isCasePlayable = true;
        divInfo.playState = undefined;
    }); */
