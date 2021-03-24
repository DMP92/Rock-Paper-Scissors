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

// Randomized Computer Selection
function computerPlay() {
    var computer = gameArray[Math.floor(Math.random() * gameArray.length)];
    return console.log(computer);
}

computerPlay();

// Single Round of RPS

function gamePlay(playerSelection, computerSelection) {
    if (playerSelection == rock && computerSelection == rock) {
        return "Tie! Try again!";
    } else if (playerSelection == rock && computerSelection == paper) {
        return "You lost! Paper covers rock!";
    } else if (playerSelection == rock && computerSelection == scissors) {
        return "You win! Rock smashes scissors!";
    } else if (playerSelection == paper && computerSelection == paper) {
        return "Tie! Try again!";
    } else if (playerSelection == paper && computerSelection == rock) {
        return "You win! Paper covers rock!";
    } else if (playerSelection == paper && computerSelection == scissors) {
        return "You lost! Scissors cuts paper!";
    } else if (playerSelection == scissors && computerSelection == scissors) {
        return "Tie! Try again!";
    } else if (playerSelection == scissors && computerSelection == paper) {
        return "You win! Scissors cuts paper!";
    } else if (playerSelection == scissors && computerSelection == rock) {
        return "You lost! Rock smashes scissors!";
    }
}

console.log(gamePlay(scissors, paper));

function game() {
    
}