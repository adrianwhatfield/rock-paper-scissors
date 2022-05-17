let playerSelection = "rock";
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerResult = Math.floor((Math.random() * 3)+ 1);
    //console.log(computerResult);

    if (computerResult === 1) {
        computerResult = "rock";
    };
    
    if (computerResult === 2) {
        computerResult = "paper";
    };
    
    if (computerResult === 3) {
        computerResult = "scissors";
    };
    //console.log(computerResult);
    //console.log(computerResult);
    //console.log(computerResult);

    return computerResult;
};

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    //console.log(playerSelection);
    //console.log(computerSelection);

    let roundResult = "";

    if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = "You win! Rock beats scissors.";
        playerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        roundResult = "You tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult = "You lose! Paper beats rock.";
        computerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = "You lose! Scissors beats paper.";
        computerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        roundResult = "You tie!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResult = "You win! Paper beats rock.";
        playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        roundResult = "You tie!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = "You win! scissors beats paper.";
        playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "You lose! Rock beats scissors.";
        computerScore += 1;
    };

    console.log(roundResult);
    //console.log(playerScore);
    //console.log(computerScore);
    return roundResult;
}

//console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, or scissors?");
        playRound(playerSelection, computerSelection);
    }

    if (computerScore > playerScore) {
        return console.log("You lost!")
    } else if (playerScore > computerScore) {
        return console.log("You won!");
    } else if (computerScore == playerScore) {
        return console.log("You tied!");
    };
}

game();
//console.log(playerScore);
//console.log(computerScore);
console.log("Your score was " + playerScore + "/5");
