const options = ["ROCK", "PAPER", "SCISSORS"];

const resultsDiv = document.querySelector('.results');
const choice1 = document.createElement('h2');
const choice2 = document.createElement('h2');
const winner = document.createElement('h1');
resultsDiv.appendChild(choice1);
resultsDiv.appendChild(choice2);
resultsDiv.appendChild(winner);

function getComputerChoice() {
    const roll = Math.floor(Math.random() * options.length);
    const pick = options[roll];    
    return pick;
}

function playRound(playerSelection, computerSelection) {
    choice1.textContent = ("Player chose " + playerSelection);
    choice2.textContent = ("Computer chose " + computerSelection);
    if (playerSelection === computerSelection) {
        winner.textContent = "It's a tie!";
        return;
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            winner.textContent = "ROCK beats SCISSORS; Player wins!";
            return;
        } else {
            winner.textContent = "PAPER beats ROCK; Computer wins!";
            return; 
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            winner.textContent = "ROCK beats SCISSORS; Computer wins!";
            return;
        } else {
            winner.textContent = "SCISSORS beat PAPER; Player wins!";
            return;
        }
    } else { //if PLAYER picks PAPER//
        if (computerSelection === "ROCK") {
            winner.textContent = "PAPER beats ROCK; Player wins!";
            return;
        } else {
            winner.textContent = "SCISSORS beat PAPER; Computer wins!";
            return;
        }
    }
}

// const rockButton = document.getElementById("rock");
// const paperButton = document.getElementById("paper");
// const scissorsButton = document.getElementById("scissors");

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const playerChoice = e.target.textContent.toUpperCase();
        playRound(playerChoice, getComputerChoice());
    });
});
