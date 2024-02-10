const options = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    const roll = Math.floor(Math.random() * options.length);
    const pick = options[roll];    
    return pick;
}

function playRound(playerSelection, computerSelection) {
    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection);
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return;
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            console.log("ROCK beats SCISSORS; Player wins!");
            return;
        } else {
            console.log("PAPER beats ROCK; Computer wins!");
            return; 
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            console.log("ROCK beats SCISSORS; Computer wins!");
            return;
        } else {
            console.log("SCISSORS beat PAPER; Player wins!");
            return;
        }
    } else { //if PLAYER picks PAPER//
        if (computerSelection === "ROCK") {
            console.log("PAPER beats ROCK; Player wins!");
            return;
        } else {
            console.log("SCISSORS beat PAPER; Computer wins!");
            return;
        }
    }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const playerChoice = e.target.textContent.toUpperCase();
        playRound(playerChoice, getComputerChoice());
    });
});
