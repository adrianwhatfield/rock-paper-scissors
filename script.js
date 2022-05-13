function computerPlay() {
    let computerResult = Math.floor((Math.random() * 3)+ 1);
    //console.log(computerResult);

    if (computerResult === 1) {
        computerResult = "Rock";
    };
    
    if (computerResult === 2) {
        computerResult = "Paper";
    };
    
    if (computerResult === 3) {
        computerResult = "Scissors";
    };
    //console.log(computerResult);

    return computerResult;
};
