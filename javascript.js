console.log("Hello, Rock, Paper, Scissors!");

// global variables for the game
let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;

// function to get computer selection
function getComputerChoice() {
    // 0 = rock, 1 = paper, 2 = scissors
    let number = Math.floor(Math.random() * 3);
    let computer = '';

    switch (number) {
        case 0:
            computer = 'rock';
        break;
        case 1:
            computer = 'paper';
        break;
        case 2:
            computer = 'scissors';
        break;
    }
    return computer;
}

// function to play a round of the game
function playRound(playerSelection, computerSelection) {
    let result = "";
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                result = "It's a tie!";
            }
            else if (computerSelection === 'paper') {
                result = "You lose! Paper beats rock!";
                computerWins++;
            }
            else if (computerSelection === 'scissors') {
                result = "You win! Rock beats scissors!";
                playerWins++;
            }
            else {
                result = "Congrats! You have memory access issues or something! You should probably get that checked out. No, really. I mean you, personally. Not the game. I'm sorry you had to find out this way, but... I couldn't find another way to tell you... You're also adopted.";
            }
            break;

            case 'paper':
            if (computerSelection === 'rock') {
                result = "You win! Paper beats rock!";
                playerWins++;
            }
            else if (computerSelection === 'paper') {
                result = "It's a tie!";
            }
            else if (computerSelection === 'scissors') {
                result = "You lose! Scissors beats paper!";
                computerWins++;
            }
            else {
                result = "We should see other people...";
            }
            break;

            case 'scissors':
            if (computerSelection === 'rock') {
                result = "You lose! Rock beats scissors!";
                computerWins++;
            }
            else if (computerSelection === 'paper') {
                result = "You win! Scissors beats paper!";
                playerWins++;
            }
            else if (computerSelection === 'scissors') {
                result = "It's a tie!";
            }
            else {
                result = "Hello darkness my old friend...";
            }
            break;
    }
    // not trying to optimize, so just one return statement here for the code
    return result;
}

// modify this function so that the player selection is a function 
// from a button press, and the button is passed as an arg
function game(pChoice) {
    // play 5 games
    //for (let i = 0; i < 1; i++) {   // TODO: change back to 5
        //let player = prompt("Rock, Paper, or Scissors? (Case doesn't matter. Go wYld.)").toLowerCase();
        // let outcome = playRound(player, getComputerChoice());
        let outcome = playRound(pChoice, getComputerChoice());
        console.log(outcome);
        roundsPlayed++;
    //}

    if (roundsPlayed === 5) {
        console.log(playerWins);
        console.log(computerWins);
        if (playerWins > computerWins) {
            console.log("Player wins overall!");
        }
        else if (playerWins < computerWins) {
            console.log("Computer wins overall!");
        }
        else {
            console.log("Overall tie!");
        }
        roundsPlayed = 0;
        playerWins = 0;
        computerWins = 0;
    }
}

//game();

function getPlayerChoice(e) {
     console.log(e.target.innerText);
     //return e.target.innerText;
     game(e.target.innerText.toLowerCase())
}

const btn = document.querySelector("button");

btn.addEventListener("click", getPlayerChoice);

// function buttonClicked(e) {
//     const button = document.querySelectorAll('.rps-selection');
//     console.log(button);
// }

// window.addEventListener('click', buttonClicked);

// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log(button.id);
//     })
// });