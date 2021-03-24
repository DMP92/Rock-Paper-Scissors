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
