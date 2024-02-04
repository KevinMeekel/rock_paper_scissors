const options = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    const roll = Math.floor(Math.random() * options.length);
    const pick = options[roll];   

    return pick;
}

function playRound(playerSelection, computerSelection) {
    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection);

    let playerWin = false;
    let computerWin = false;
    let winner = null;

    if (playerSelection === computerSelection) {       
        console.log("It's a tie!");        
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            console.log("ROCK beats SCISSORS; Player wins!");
            playerWin = true;            
        } else {
            console.log("PAPER beats ROCK; Computer wins!");
            computerWin = true;           
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            console.log("ROCK beats SCISSORS; Computer wins!");
            computerWin = true;  
        } else {
            console.log("SCISSORS beat PAPER; Player wins!");
            playerWin = true;
        }
    } else {
        if (computerSelection === "ROCK") {
            console.log("PAPER beats ROCK; Player wins!");
            playerWin = true;                       
        } else {
            console.log("SCISSORS beat PAPER; Computer wins!");
            computerWin = true;            
        }
    }

    if (playerWin === true) {
        winner = "player";
    } else if (computerWin === true) {
        winner = "computer";
    } else {
        winner = "draw";
    }

    return winner;
}

function bestOfFive() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let userInput = prompt('Enter "Rock", "Paper" or "Scissors" (not case sensitive)', undefined);
        let playerChoice = userInput.toUpperCase();
        const outcome = playRound(playerChoice, getComputerChoice())
        if (outcome === "player") {
            playerWins++;
            console.log("Player wincount: " + playerWins);
            console.log("Computer wincount: " + computerWins);
            console.log("=============================");
        } else if (outcome === "computer") {
            computerWins++;
            console.log("Player wincount: " + playerWins);
            console.log("Computer wincount: " + computerWins);
            console.log("=============================");
        } else {
            console.log("Player wincount: " + playerWins);
            console.log("Computer wincount: " + computerWins);
            console.log("=============================");
        }
    }

    console.log("=============================");
    console.log("Player final win count: " + playerWins);
    console.log("Computer final win count: " + computerWins);

    if (playerWins > computerWins) {
        console.log("Player has won the best of five!");
        return;
    } else if (playerWins < computerWins) {
        console.log("Computer has won the best of five!");
        return;
    } else {
        console.log("Best of five ended in a draw with " + playerWins + " against " + computerWins + " !");
        return;
    }    
}

bestOfFive();