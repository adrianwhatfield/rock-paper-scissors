let playerSelection = "rock";
let playerScore = 0;
let computerScore = 0;

const arrayLength = 5;

var computerResultsArray = [];

for (var i = 0; i < arrayLength; i++) {
    computerResultsArray.push(Math.floor(Math.random() * 3) + 1);
}

let computerSelection = computerResultsArray[0];

function computerPlay() {
    //let computerResult = Math.floor((Math.random() * 3)+ 1);
    //console.log(computerResult);

    //if (computerResult === 1) {
        //computerResult = "rock";
    //};
    
    //if (computerResult === 2) {
        //computerResult = "paper";
    //};
    
    //if (computerResult === 3) {
        //computerResult = "scissors";
    //};

    //console.log(computerResult);
    //console.log(computerResult);
    //console.log(computerResult);

    //console.log(computerResultsArray);

    return computerResult;
};

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    //console.log(playerSelection);
    //console.log(computerSelection);

    let roundResult = "";

    //rock = 1, paper = 2, scissors = 3
    if (playerSelection == "rock" && computerSelection == 3) {
        roundResult = "You win! Rock beats scissors.";
        playerScore += 1;
    } else if (playerSelection == "rock" && computerSelection == 1) {
        roundResult = "You tie!";
    } else if (playerSelection == "rock" && computerSelection == 2) {
        roundResult = "You lose! Paper beats rock.";
        computerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == 3) {
        roundResult = "You lose! Scissors beats paper.";
        computerScore += 1;
    } else if (playerSelection == "paper" && computerSelection == 2) {
        roundResult = "You tie!";
    } else if (playerSelection == "paper" && computerSelection == 1) {
        roundResult = "You win! Paper beats rock.";
        playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == 3) {
        roundResult = "You tie!";
    } else if (playerSelection == "scissors" && computerSelection == 2) {
        roundResult = "You win! scissors beats paper.";
        playerScore += 1;
    } else if (playerSelection == "scissors" && computerSelection == 1) {
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
        computerSelection = computerResultsArray[0];
        playRound(playerSelection, computerSelection);
        computerResultsArray.shift();
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
