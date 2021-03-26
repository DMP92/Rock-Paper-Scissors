let rock = "rock"; //= document.getElementsByClassName("rock");
let paper = "paper"; //= document.getElementsByClassName("paper");
let scissors= "scissors"; //= document.getElementsByClassName("scissors");
let playerSelection;
let playerScore = 0;
let computerScore = 0;

const gameArray = [
    rock,
    paper,
    scissors
]

function roundCounter() {
    round += 1;
    return round;
}
    
   
function computersChoice() {
    var computer = gameArray[Math.floor(Math.random()
            * gameArray.length)];
    return computer;
}

let computerSelection = computersChoice();



/*
function game() {
    gameArray.addEventListener("click", gamePlay(playerSelection, computerSelection));
    
    }
*/

function gamePlay(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === computerSelection:
            console.log(`Its a tie! You both chose ${playerSelection}! Try again!`);
            break;
        case playerSelection === rock && computerSelection === scissors:
        case playerSelection === paper && computerSelection === rock:
        case playerSelection === scissors && computerSelection === paper:
            console.log(`${playerSelection} beats ${computerSelection}!`);
            playerScore += 1;
            
            break;
        default:
            console.log(`${computerSelection} beats ${playerSelection} You lose. Try again!`);
            computerScore += 1;
    }
   
}

function scoreTracker() {
    switch (true) {
        case (playerScore > computerScore):
            console.log(`You scored ${playerScore}, and the computer ${computerScore}! You win!`);
            break;
        default: 
            console.log(`The computer scored ${computerScore}, you scored ${playerScore}! You lost..`)
    }
}

function game() {
    for (round = 1; round < 6; round++) {
        console.log(`Round ${round}`);
        gamePlay(rock, computerSelection);
        
    }
    console.log("----------------- Final Score ---------------------");
    scoreTracker();
}
game();
