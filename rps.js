function getUserChoice() {
    let userChoice = window.prompt("Pick r p or s").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(userChoice)) {
        userChoice = window.prompt("Error: Choice must me only r p or s").toLowerCase();
    }
    return userChoice;
}

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function beatsRock(rps) {
    if (rps === "paper") {
        return true; 
    } 
    if (rps === "scissors") {
        return false;
    }
}

function beatsPaper(rps) {
    if (rps === "scissors") {
        return true;
    }
    if (rps === "rock") {
        return false;
    }
}

function beatsScissors(rps) {
    if (rps === "rock") {
        return true;
    }
    if (rps === "paper") {
        return false;
    }
}

function determineWinner(playerA, playerB) {
    if (playerA === playerB) {
        return "tie"
    }
    
    let playerAWins;
    switch (playerA) {
        case "rock":
            playerAWins = beatsRock(playerB);
            break;
        case "paper":
            playerAWins = beatsPaper(playerB);
            break;
        case "scissors":
            playerAWins = beatsScissors(playerB);
            break;
    }

    if (playerAWins) {
        return "playerA";
    } else {
        return "playerB";
    }
}

function playRound() {
    switch (determineWinner(getUserChoice(), getComputerChoice())) {
        case "tie":
            return "tie";
        case "playerA":
            return "player";
        case "playerB":
            return "computer";
    }
}
   
function playSet() {
    let cpuWins = 0;
    let playerWins = 0;
    let ties = 0;
    console.log(`Player: ${playerWins} CPU: ${cpuWins} Ties: ${ties}`);
    while (playerWins < 3 && cpuWins < 3) {
        winner = playRound();
        if (winner === "player") {
            playerWins++;
        } else if (winner === "computer") {
            cpuWins++;
        } else {
            ties++
        } 
        console.log(`Player: ${playerWins} CPU: ${cpuWins} Ties: ${ties}`);
    }
    
} 

playSet();
