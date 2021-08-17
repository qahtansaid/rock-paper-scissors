const myArray = ["jempol", "kelingking", "telunjuk"];
const imgArr = ["./assets/hands/svg/018-thumb up.svg", "./assets/hands/svg/011-pinky finger.svg", "./assets/hands/svg/005-up.svg"]
let playerScore = 0;
let computerScore = 0;
let totalMatch = 5;
let buttons = document.querySelectorAll(".playerBtn");
let playerElement = document.getElementById('playerChoose');
let compElement = document.getElementById('compChoose');
let winPlayerElement = document.getElementById('playerWin');
let winCompElement = document.getElementById('compWin');
let modalElement = document.getElementById('modal');
let resultElement = document.getElementById('resultWin');
let resetBtnElement = document.getElementById('restart-btn');
const playRound = (playerSelection) => {
    let computerSelection = computerPlay();
    playerElement.src = imgArr[myArray.findIndex((val) => val == playerSelection)];
    compElement.src = imgArr[myArray.findIndex((val) => val == computerSelection)];
    if (playerScore == totalMatch || computerScore == totalMatch) {
        modalElement.style.display = "block"
        resultElement.innerHTML = getWinner();
    } else {
        if (playerSelection == computerSelection) {
            winCompElement.style.opacity = 0;
            winPlayerElement.style.opacity = 0;
        } else if (
            playerSelection == 'jempol' && computerSelection == 'telunjuk' ||
            playerSelection == 'telunjuk' && computerSelection == 'kelingking' ||
            playerSelection == 'kelingking' && computerSelection == 'jempol'
        ) {
            // console.log("win");
            winPlayerElement.style.opacity = 1;
            winCompElement.style.opacity = 0;
            playerScore += 1;
        } else {
            winCompElement.style.opacity = 1;
            winPlayerElement.style.opacity = 0;
            // console.log("lose");
            computerScore += 1;
        }
    }

}
const computerPlay = () => {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
const getWinner = () => {
    let result = "";
    if (playerScore == totalMatch) {
        result = "Player Win!."
    } else if (computerScore == totalMatch) {
        result = "You Lose!."
    }
    return result;
}
const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    totalMatch = 5;
}
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e.target.getAttribute("value"));

    });
});
resetBtnElement.addEventListener("click", ()=>{
    resetGame();
    modalElement.style.display = "none";
})