/*  - There should be a place for the user to choose
    - Once the user clicks their choice the computer 
    should randomly select as well
    - This should then cause a message to pop up with results
    - The game count should go to 5 and then declare a winner
    - After the game is over, there should be a message with a 
    prompt to play again
    - (BONUS) There should be a way to track the progress of 
    each game played in a session

    - need to structure which items win/lose to which
    - need to set up me, vs computer

    I think if I created two variables. One that kicks
    off the second. I would select the button, and 
    that would call the function to randomly select
    a button for the computer. The two would be weighed,
    and the results print to the screen.
*/


// Rock, Paper, Scissor Button Identifiers
let rock = document.getElementsByClassName("rock");
let paper = document.getElementsByClassName("paper");
let scissors = document.getElementsByClassName("scissors");


// Array for computer randomized selection
const gameArray = [
    rock,
    paper,
    scissors
]

// function that gets activated after user's selection
function computerPlay() {
    var computer = gameArray[Math.floor(Math.random() * gameArray.length)];
    buttonClick();
    return console.log(computer);
}

scissors.addEventListener("click", function () {
    computerSelection();
})

// Function for Rock Paper Scissor Priority

/*

function priorityLevel() {
    if (rock && scissors) {

    }
}




// Just a test to see if I can get JS to show that the computer has made a choice
//function buttonClick() {
    //var sciButton = document.getElementsByClassName("scissors").style.background-color = rgba(52, 125, 121, .6);
   
}

*/
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
/* Copied all of the below text from the odin.js page. 
got to the point that they wanted me to input different code 
in the odin.js file for the completion of this project instead of this code */
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


let rButton = document.querySelector(".rock");
let pButton = document.querySelector(".paper");
let sButton = document.querySelector(".scissors");

rButton.onclick = function() {
    gamePlay(rock, computerSelection);

    
}

pButton.onclick = function() {
    gamePlay(paper, computerSelection);
}

sButton.onclick = function() {
    gamePlay(scissors, computerSelection);
}