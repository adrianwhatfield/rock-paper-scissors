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

let score = 0;
let playerChoice = prompt("Rock, paper, scissors?");
//const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerChoice.toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Computer's choice: " + computerSelection);
        console.log("Player's choice: " + playerSelection);
        return "You lose! Paper beats rock.";

    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Computer's choice: " + computerSelection);
        console.log("Player's choice: " + playerSelection);
        score += 1;
        return "You win! Rock beats scissors.";

    } else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Computer's choice: " + computerSelection);
        console.log("Player's choice: " + playerSelection);
        return "You tie!";

    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Computer's choice: " + computerSelection);
        console.log("Player's choice: " + playerSelection);
        return "You lose! Scissors beats paper.";

    } else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("Computer's choice: " + computerSelection);
        console.log("Player's choice: " + playerSelection);
        return "You tie!";

    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Computer's choice: " + computerSelection);
        console.log("Player's choice: " + playerSelection);
        score += 1;
        return "You win! Paper beats rock.";

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Computer's choice: " + computerSelection);
        console.log("Player's choice: " + playerSelection);
        score += 1;
        return "You win! Scissors beats paper.";

    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Computer's choice: " + computerSelection);
        console.log("Player's choice: " + playerSelection);
        return "You lose! Rock beats scissors.";

    } else {
        console.log("Computer's choice: " + computerSelection);
        console.log("Player's choice: " + playerSelection);
        return "You tie!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        playerChoice = prompt("Rock, paper, scissors?");
    };
    if (score >= 3) {
        return "YOU WON!"
    } else {
        return "YOU LOST!"
    }
}


//console.log("Computer's choice: " + getComputerChoice());
//console.log("Player's choice: " + playerChoice);
//console.log(playRound());
console.log(game());