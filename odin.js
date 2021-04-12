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
const ask = document.createElement('h2');
const yes = document.createElement('button');
const no = document.createElement('button');
yes.setAttribute('class', 'yes');
no.setAttribute('class', 'no');
ask.setAttribute('class', 'ask');

const roundShow = document.querySelector('.round')
const para = document.createElement('p');
const results = document.querySelector('.results');
const yourResults = document.querySelector('.yourResults');
const compResults = document.querySelector('.compResults');
const resultContainer = document.querySelector('.resultContainer');
const userScoreCont = document.querySelector('.userScore');
const compScoreCont = document.querySelector('.compScore');
const userScore = document.createElement('p');
const compScore = document.createElement('p');

roundShow.innerHTML = `<p>Round ${round}</p>`;
yourResults.innerHTML = `<h3> You </h3>`;
compResults.innerHTML = `<h3> Comp </h3>`
userScore.textContent =  `${playerScore}`;
compScore.innerHTML =  `${computerScore}`;       
userScoreCont.appendChild(userScore);
compScoreCont.appendChild(compScore);





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
            yourResults.innerHTML = `<h3> You </h3>`;
            userScore.innerHTML =  `${playerScore}`;
            break;
            
        default:
            para.textContent =`${computerSelection} beats ${playerSelection} You lose.`;
            computerScore += 1;
            compResults.innerHTML = `<h3> Comp </h3>`;
            compScore.innerHTML = `${computerScore}`;
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

function btnStop() {
    if (round => 5) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

function rounds() {
    const newPage = document.querySelector('.body');

    ask.textContent = 'Play again?';
    yes.textContent = 'Yes';
    no.textContent = 'No';

    results.appendChild(ask);
    results.appendChild(yes);
    results.appendChild(no);

    yes.addEventListener('click', () => {
        rButton.disabled = false;
        pButton.disabled = false;
        sButton.disabled = false;
        round = 0;

        roundShow.innerHTML = `<p>Round ${round}</p>`;
        results.textContent = '';

        playerScore = 0;
        computerScore = 0;

        compRButton.setAttribute('class', 'compPButtonDefault'); 
        compPButton.setAttribute('class', 'compPButtonDefault'); 
        compSButton.setAttribute('class', 'compPButtonDefault'); 
        
        
        yourResults.innerHTML = `<h3> You </h3>`;
        compResults.innerHTML = `<h3> Comp </h3>`
        userScore.textContent =  `${playerScore}`;
        compScore.innerHTML =  `${computerScore}`;    
    })
}



// -------------------------------------------- Event listeners for buttons 

rButton.addEventListener('click', () => {
    let playerSelection = rock;
    let computerSelection = computersChoice();
    round += 1;
    visibleCompChoice(computerSelection)
    gamePlay(playerSelection, computerSelection);

    if (round === 4) {
        roundShow.innerHTML = `<p>Final Round!</p>`;
        
    } else if (round > 4) {
        roundShow.innerHTML = '<p>Game Over!</p>';
        results.appendChild(para);
        rButton.disabled = true;
        pButton.disabled = true;
        sButton.disabled = true;
        score();
        rounds();

    } else {
        roundShow.innerHTML = `<p>Round ${round}</p>`;
    }

    console.log(playerScore, computerScore);
    results.appendChild(para);
})

pButton.onclick = function() {
    playersSelection = paper;
    let computerSelection = computersChoice();
    round += 1;
    visibleCompChoice(computerSelection)
    gamePlay(paper, computerSelection);

    if (round === 4) {
        roundShow.innerHTML = `<p>Final Round!</p>`;
    
    } else if (round > 4) {
        roundShow.innerHTML = '<p>Game Over!</p>';
        results.appendChild(para);
        rButton.disabled = true;
        pButton.disabled = true;
        sButton.disabled = true;        
        score();
        rounds();

    } else {
        roundShow.innerHTML = `<p>Round ${round}</p>`;
    }

    console.log(playerScore, computerScore);
    results.appendChild(para);  
}

sButton.onclick = function() {
    playerSelection = scissors;
    let computerSelection = computersChoice();
    round += 1;
    visibleCompChoice(computerSelection)
    gamePlay(scissors, computerSelection);

    if (round === 4) {
        roundShow.innerHTML = `<p>Final Round!</p>`;
        
    } else if (round > 4) {
        roundShow.innerHTML = '<p>Game Over!</p>';
        results.appendChild(para);
        rButton.disabled = true;
        pButton.disabled = true;
        sButton.disabled = true;        
        score();
        rounds();

    } else {
        roundShow.innerHTML = `<p>Round ${round}</p>`;
    }
    
    console.log(playerScore, computerScore);
    results.appendChild(para);       
}

function score() {
    
    if (round === 5 && playerScore > computerScore) {
        
       
        results.innerHTML = `<p>${playerScore} to ${computerScore}, you won!</p>`;
        console.log(computerScore);
        console.log(playerScore);
        

       
    } else {

        
        
        results.innerHTML = `<p>${computerScore} to ${playerScore}, you lost..</p>`;
        console.log(computerScore);
        console.log(playerScore);
        
        
    }

}





    
  


