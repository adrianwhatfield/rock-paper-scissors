
let playerScore = 0;
let computerScore = 0;
let playerChoice = "";

const gameStateBox = document.getElementById("gameState");

const playerScoreBox = document.getElementById("playerScore");
const computerScoreBox = document.getElementById("compScore");

// Event listeners for the playerChoice buttons
document.getElementById("scissorsButton").addEventListener("click", chooseScissors);
document.getElementById("rockButton").addEventListener("click", chooseRock);
document.getElementById("paperButton").addEventListener("click", choosePaper);

// Randomly generate 1,2, or 3 and return a string of the choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * (4 - 1) + 1);
    //return choice;
    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Update playerChoice and play a round
function chooseScissors() {
    playerChoice = "scissors";
    playRound();
}

function chooseRock() {
    playerChoice = "rock";
    playRound();
}

function choosePaper() {
    playerChoice = "paper";
    playRound();
}


// Play a full round of the game, change score, display results, and check for a winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerChoice.toLowerCase();
    computerSelection = getComputerChoice();

    if (playerScore >= 5) {
        gameStateBox.textContent = `You win the game!`;
        resetGame()
    } else if (computerScore >= 5) {
        gameStateBox.textContent = `You lost the game!`;
        resetGame()
    } else if (playerSelection == computerSelection) {
        playerScoreBox.textContent = playerScore.toString();
        computerScoreBox.textContent = computerScore.toString();
        gameStateBox.textContent = "You tie!";
    } else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock"
    ) {
        playerScore += 1;
        playerScoreBox.textContent = playerScore.toString();
        computerScoreBox.textContent = computerScore.toString();
        gameStateBox.textContent = `You win, ${playerSelection} beats ${computerSelection}!`;
    }
    else if (
        computerSelection == "rock" && playerSelection == "scissors" ||
        computerSelection == "scissors" && playerSelection == "paper" ||
        computerSelection == "paper" && playerSelection == "rock"
    ) {
        computerScore += 1;
        playerScoreBox.textContent = playerScore.toString();
        computerScoreBox.textContent = computerScore.toString();
        gameStateBox.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`;
    }
}


// Reset the score and text
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreBox.textContent = playerScore.toString();
    computerScoreBox.textContent = computerScore.toString();
    gameStateBox.textContent = `Five points to win!`;
}