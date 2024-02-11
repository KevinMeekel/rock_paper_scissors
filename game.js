const options = ["ROCK", "PAPER", "SCISSORS"];

const resultsDiv = document.querySelector('.results');

const choice1 = document.createElement('h2');
const choice2 = document.createElement('h2');
const winner = document.createElement('h1');
const scoreDiv = document.createElement('div');
const finalWin = document.createElement('h1');

const playerScoreDisplay = document.createElement('h3');
const computerScoreDisplay = document.createElement('h3');
let playerScore = 0;
let computerScore = 0;

resultsDiv.appendChild(choice1);
resultsDiv.appendChild(choice2);
resultsDiv.appendChild(winner);
resultsDiv.appendChild(scoreDiv);
resultsDiv.appendChild(finalWin);

scoreDiv.style = "display: flex; gap: 30px";
scoreDiv.appendChild(playerScoreDisplay);
scoreDiv.appendChild(computerScoreDisplay);

finalWin.style = "font-size: 48px; color: green";

playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

function getComputerChoice() {
    const roll = Math.floor(Math.random() * options.length);
    const pick = options[roll];    
    return pick;
}

function checkWin() {
    if (playerScore === 5) {
        finalWin.textContent = "Player is first to win 5 rounds - Game Over!";
    } else if (computerScore === 5) {
        finalWin.textContent = "Computer is first to win 5 rounds - Game Over!";
        finalWin.style = "font-size: 48px; color: red";
    } else return;
}

function playRound(playerSelection, computerSelection) {
    choice1.textContent = ("Player chose " + playerSelection);
    choice2.textContent = ("Computer chose " + computerSelection);
    if (playerSelection === computerSelection) {
        winner.textContent = "It's a tie!"
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            winner.textContent = "ROCK beats SCISSORS; Player wins!";
            playerScore++;
        } else {
            winner.textContent = "PAPER beats ROCK; Computer wins!";
            computerScore++; 
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            winner.textContent = "ROCK beats SCISSORS; Computer wins!";
            computerScore++;
        } else {
            winner.textContent = "SCISSORS beat PAPER; Player wins!";
            playerScore++;
        }
    } else { //if PLAYER picks PAPER//
        if (computerSelection === "ROCK") {
            winner.textContent = "PAPER beats ROCK; Player wins!";
            playerScore++;
        } else {
            winner.textContent = "SCISSORS beat PAPER; Computer wins!";
            computerScore++;
        }
    }
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    checkWin();
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
