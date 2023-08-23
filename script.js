const choosePlayerButton = document.querySelector('#choose-player-button');
const playerForm = document.querySelector('.player-form');
const confirmPlayerButton = document.querySelector('.confirm-player');

choosePlayerButton.addEventListener('click', () => {
    playerForm.style.cssText = "display: block;"
});

confirmPlayerButton.addEventListener('click', () => {
    playerForm.style.cssText = "display: none;"
})