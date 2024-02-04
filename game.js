const options = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    const roll = Math.floor(Math.random() * options.length);
    const pick = options[roll];    
    return pick;
}

console.log("Computer's choice: " + getComputerChoice());