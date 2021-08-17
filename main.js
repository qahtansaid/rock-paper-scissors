const myArray = ["jempol", "kelingking", "telunjuk"];
const imgArr = ["./assets/hands/svg/018-thumb up.svg","./assets/hands/svg/011-pinky finger.svg","./assets/hands/svg/005-up.svg"]
let playerScore = 0;
let computerScore = 0;
let totalMatch = 5;
let buttons = document.querySelectorAll(".playerBtn");
let playerElement = document.getElementById('playerChoose');
let compElement = document.getElementById('compChoose');
let winPlayerElement = document.getElementById('playerWin');
let winCompElement = document.getElementById('compWin');
let modalElement = document.getElementById('modal');
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    playerElement.src = imgArr[myArray.findIndex((val)=> val == playerSelection)];
    compElement.src = imgArr[myArray.findIndex((val)=> val == computerSelection)];
    if(playerScore == totalMatch || computerScore == totalMatch){
        console.log("player", playerScore);
        console.log("comp",computerScore);
        modalElement.style.display = "block"
        
    } else {
        if(playerSelection == computerSelection ){
            winCompElement.style.opacity = 0;
            winPlayerElement.style.opacity = 0;
        } else if 
        (
            playerSelection == 'jempol' && computerSelection == 'telunjuk' ||
            playerSelection == 'telunjuk' && computerSelection == 'kelingking' ||
            playerSelection == 'kelingking' && computerSelection == 'jempol'
        ){
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
function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }


buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
    playRound(e.target.getAttribute("value"));
  
    //   if (playerScore === 5 || computerScore === 5) {
    //     declareWinner();
    //   }
    });
  });
  
// console.log(playRound(playerSelection, computerSelection));