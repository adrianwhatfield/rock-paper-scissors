function getComputerChoice() {
    let choice = Math.floor(Math.random() * (4 - 1) + 1);
    //return choice;
    if (choice == 1) {
        return "Rock";
    } else if (choice == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log("Computer's choice: " + getComputerChoice())