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
        console.log("playerWin: " + playerWin);
        console.log("computerWin: " + computerWin);
        console.log("It's a tie!");
        
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            console.log("ROCK beats SCISSORS; Player wins!");
            playerWin = true;
            console.log("playerWin: " + playerWin);
            console.log("computerWin: " + computerWin);
            
        } else {
            console.log("PAPER beats ROCK; Computer wins!");
            computerWin = true;
            console.log("playerWin: " + playerWin);
            console.log("computerWin: " + computerWin);
            
        }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            console.log("ROCK beats SCISSORS; Computer wins!");
            computerWin = true;
            console.log("playerWin: " + playerWin);
            console.log("computerWin: " + computerWin);
            
        } else {
            console.log("SCISSORS beat PAPER; Player wins!");
            playerWin = true;
            console.log("playerWin: " + playerWin);
            console.log("computerWin: " + computerWin);
            
        }
    } else { //if PLAYER picks PAPER//
        if (computerSelection === "ROCK") {
            console.log("PAPER beats ROCK; Player wins!");
            playerWin = true;
            console.log("playerWin: " + playerWin);
            console.log("computerWin: " + computerWin);
            
        } else {
            console.log("SCISSORS beat PAPER; Computer wins!");
            computerWin = true;
            console.log("playerWin: " + playerWin);
            console.log("computerWin: " + computerWin);
            
        }
    }
    if (playerWin === true) {
        winner = "player";
        console.log("WINNER: " + winner);
    } else if (computerWin === true) {
        winner = "computer";
        console.log("WINNER: " + winner);
    } else {
        winner = "draw";
        console.log("DRAW");
    }
    console.log("winner value" + winner);
    return winner;
}

function bestOfFive() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let userInput = prompt('Enter "Rock", "Paper" or "Scissors" (not case sensitive)', undefined);
        let playerChoice = userInput.toUpperCase();
        const outcome = playRound(playerChoice, getComputerChoice())
        console.log("outcome value: " + outcome);
        if (outcome === "player") {
            playerWins++;
            console.log("player wincount: " + playerWins);
            console.log("computer wincount: " + computerWins);
            
        } else if (outcome === "computer") {
            computerWins++;
            console.log("player wincount: " + playerWins);
            console.log("computer wincount: " + computerWins);
            
        } else {
            console.log("Draw! ");
            console.log("player wincount: " + playerWins);
            console.log("computer wincount: " + computerWins);
            
        }
    }

    console.log("player final win count: " + playerWins);
    console.log("computer final win count: " + computerWins);

    if (playerWins > computerWins) {
        console.log("Player has won the best of five!");
        console.log("=============================");
        return;
    } else if (playerWins < computerWins) {
        console.log("Computer has won the best of five!");
        console.log("=============================");
        return;
    } else {
        console.log("Best of five ended in a draw with " + playerWins + " against " + computerWins + " !");
        console.log("=============================");
        return;
    }

    
}

bestOfFive();