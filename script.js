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

    return computerResult;
};

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    //console.log(playerSelection);
    //console.log(computerSelection);

    let roundResult = "";

    if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = "You win! Rock beats scissors.";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        roundResult = "You tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult = "You lose! Paper beats rock.";
    }

    //console.log(roundResult);
    return roundResult;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));