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
        return "It's a tie!";
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            return "ROCK beats SCISSORS; Player wins!"
        } else {
            return "PAPER beats ROCK; Computer wins!"
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            return "ROCK beats SCISSORS; Computer wins!"
        } else {
            return "SCISSORS beat PAPER; Player wins!"
        }
    } else { //if PLAYER picks PAPER//
        if (computerSelection === "ROCK") {
            return "PAPER beats ROCK; Player wins!"
        } else {
            return "SCISSORS beat PAPER; Computer wins!"
        }
    }
}

let userInput = prompt('Enter "Rock", "Paper" or "Scissors" (not case sensitive)', undefined);

let playerChoice = userInput.toUpperCase();

console.log(playRound(playerChoice, getComputerChoice()));