let rock = "rock"; //= document.getElementsByClassName("rock");
let paper = "paper"; //= document.getElementsByClassName("paper");
let scissors= "scissors"; //= document.getElementsByClassName("scissors");

// game information
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0; 

// selectors for indiv. buttons
let rButton = document.querySelector(".rock");
let pButton = document.querySelector(".paper");
let sButton = document.querySelector(".scissors");

// for printing results to screen

const results = document.querySelector('.results');
const para = document.createElement('p');

// gameArray and compChoice needed for computer's random selection
const gameArray = [
    rock,
    paper,
    scissors
]

function computersChoice() {
    var computer = gameArray[Math.floor(Math.random()
            * gameArray.length)];
    return computer;
}

let computerSelection = computersChoice();








// ---------------------------- game logic

function gamePlay(playerSelection, computerSelection) {
    
    switch (true) {
        case computerSelection === playerSelection:
            para.textContent =`Its a tie! You both chose ${computerSelection}!`;
            break;
        case playerSelection === rock && computerSelection === scissors:
        case playerSelection === paper && computerSelection === rock:
        case playerSelection === scissors && computerSelection === paper:
            para.textContent =`You win! ${playerSelection} beats ${computerSelection}!`;
            playerScore += 1;
            break;
            
        default:
            para.textContent =`${computerSelection} beats ${playerSelection} You lose.`;
            computerScore += 1;
    }
   
}

function scoreTracker() {
    switch (true) {
        case (playerScore > computerScore):
            para.textContent =`You scored ${playerScore}, and the computer ${computerScore}! You win!`;
            break;
        default: 
            para.textContent = `The computer scored ${computerScore}, you scored ${playerScore}! You lost..`;
    }

};


function rounds() {
    const ask = document.createElement('h2');
    const yes = document.createElement('button');
    const no = document.createElement('button');

    ask.textContent = 'Play again?';
    yes.textContent = 'Yes';
    no.textContent = 'No';

    results.appendChild(ask);
    results.appendChild(yes);
    results.appendChild(no);
    
}

function score() {
    if (round === 5 && playerScore > computerScore) {
        const playerSco = document.createElement('h4');
        playerSco.textContent = `${playerScore} to ${computerScore}, you won!`;
        console.log(playerSco);
        results.appendChild(playerSco);
        results.style.cssText = "text-align: center; background-color: #b6fdfa; border-radius: 5px; box-shadow: 2px 2px 2px 2px  rgba(52, 125, 121, .6);";
        
    } else {
        const compSco = document.createElement('h4');
        compSco.textContent = `${computerScore} to ${playerScore}, you lost..`;
        console.log(compSco);
        results.appendChild(compSco);
        results.style.cssText = "text-align: center; background-color: #b6fdfa; border-radius: 5px; box-shadow: 2px 2px 2px 2px; box-shadow: 2px 2px 2px 2px  rgba(52, 125, 121, .6);";
        
        
    }
}

// -------------------------------------------- Event listeners for buttons 

rButton.addEventListener('click', () => {
    let playerSelection = rock;
    let computerSelection = computersChoice();
    round += 1;

    gamePlay(playerSelection, computerSelection);
    console.log(playerScore, computerScore);
    results.appendChild(para);


    if (round === 5) {
        console.log(`Round ${round} !End of game!`);
        score();
        rounds();

    } else {
       console.log(round);
    }
})

pButton.onclick = function() {
    playersSelection = paper;
    let computerSelection = computersChoice();
    round += 1;

    gamePlay(paper, computerSelection);

    console.log(playerScore, computerScore);
    results.appendChild(para);

    if (round === 5) {
        console.log(`Round ${round} !End of game!`);
        score();
        rounds();
    } else {
       console.log(round);
    }
  

    
}

sButton.onclick = function() {
    playerSelection = scissors;
    let computerSelection = computersChoice();
    round += 1;

    gamePlay(scissors, computerSelection);
    console.log(playerScore, computerScore);
    results.appendChild(para);


    if (round === 5) {
        console.log(`Round ${round} !End of game!`);
        score();
        rounds();
        

    } else {
       console.log(round);
    }
   
        
}







    
  


