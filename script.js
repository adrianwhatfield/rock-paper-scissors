function computerPlay() {
    let computerResult = Math.floor((Math.random() * 3)+ 1);
    console.log(computerResult);

    if (computerResult = 1) {
        computerResult = "Rock";
    } else if (computerResult = 3) {
        computerResult = "Paper";
    } else {
        computerResult = "Scissors";
    };
    console.log(computerResult);
};

computerPlay()