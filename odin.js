let rock = "Rock"; //= document.getElementsByClassName("rock");
let paper = "Paper"; //= document.getElementsByClassName("paper");
let scissors= "Scissors"; //= document.getElementsByClassName("scissors");

// game information
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0; 

// Full-page prompt for 'play again' request

const body = document.querySelector('body');

// selectors for indiv. buttons
let rButton = document.querySelector(".rock");
let pButton = document.querySelector(".paper");
let sButton = document.querySelector(".scissors");

// selectors for indiv. comp buttons
let compRButton = document.querySelector('.comrock');
let compPButton = document.querySelector('.compaper');
let compSButton = document.querySelector('.comscissors');

// values for highlighting comp choice
compRButton.setAttribute('class', 'compRButtonDefault'); 
compPButton.setAttribute('class', 'compPButtonDefault'); 
compSButton.setAttribute('class', 'compSButtonDefault'); 

// for printing results to screen

const results = document.querySelector('.results');
const yourResults = document.querySelector('.yourResults');
const compResults = document.querySelector('.compResults');
yourResults.innerHTML += `<h3> Your Score </h3> ${playerScore}`;
compResults.innerHTML = `<h3> Computer </h3> ${computerScore}`
                    

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



function visibleCompChoice(computer) {
    
        

        switch (true) {
            case computer === rock:
                compRButton.setAttribute('class', 'compRButton'); 
                compPButton.setAttribute('class', 'compPButtonDefault'); 
                compSButton.setAttribute('class', 'compSButtonDefault');
            break;
            case computer === paper:
                compPButton.setAttribute('class', 'compPButton'); 
                compRButton.setAttribute('class', 'compPButtonDefault'); 
                compSButton.setAttribute('class', 'compSButtonDefault');
            break;
            case computer === scissors:
                compSButton.setAttribute('class', 'compSButton'); 
                compPButton.setAttribute('class', 'compPButtonDefault'); 
                compRButton.setAttribute('class', 'compSButtonDefault');
            break;
        }

}




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
            yourResults.innerHTML = `<h4> Your Score </h4> ${playerScore}`;
            
            break;
            
        default:
            para.textContent =`${computerSelection} beats ${playerSelection} You lose.`;
            computerScore += 1;
            compResults.innerHTML = `<h4> Computer </h4> ${computerScore}`;
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
    const newPage = document.querySelector('.body');
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

        /*
        const playerSco = document.createElement('h4');
        playerSco.textContent = `${playerScore} to ${computerScore}, you won!`;
        console.log(playerSco);
        results.appendChild(playerSco);
        */
    } else {


        
        const compSco = document.createElement('h4');
        compSco.textContent = `${computerScore} to ${playerScore}, you lost..`;
        console.log(compSco);
        results.appendChild(compSco);
        
        
    }

}

// -------------------------------------------- Event listeners for buttons 

rButton.addEventListener('click', () => {
    let playerSelection = rock;
    let computerSelection = computersChoice();
    round += 1;


    visibleCompChoice(computerSelection)
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

    
    visibleCompChoice(computerSelection)
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

    visibleCompChoice(computerSelection)
    gamePlay(scissors, computerSelection);
    console.log(playerScore, computerScore);
    results.appendChild(para);
    

    if (round === 5) {
        console.log(`Round ${round} !End of game!`);
        results.appendChild(para);
        score();
        rounds();
        

    } else {
       console.log(round);
    }
   
        
}






    
  


