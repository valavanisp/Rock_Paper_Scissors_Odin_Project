console.log("Hello, Rock, Paper, Scissors!");

// global variables for the game
let playerWins = 0;
let computerWins = 0;
let ties = 0;

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

// function to get player selection from buttons
function getPlayerChoice(e) {
    console.log(e.target.innerText);
    game(e.target.innerText.toLowerCase())
}

// function to play a round of the game
function playRound(playerSelection, computerSelection) {
    let result = "";
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                result = "It's a tie!";
                ties++;
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
                ties++;
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
                ties++;
            }
            else {
                result = "Hello darkness my old friend...";
            }
            break;
    }
    // not trying to optimize, so just one return statement here for the code
    return result;
}

// game is to be played until someone reaches 5 wins
function game(pChoice) {

    let outcome = playRound(pChoice, getComputerChoice());
    console.log(outcome);

    const display = document.querySelector('.display');
    display.style.cssText = 'color: bisque; background: black;';
    display.textContent = "Player score: " + playerWins + 
    "\tComputer score: " + computerWins + "\tTies: " + ties;

    if (playerWins === 5 || computerWins === 5) {
        console.log(playerWins);
        console.log(computerWins);
        if (playerWins > computerWins) {
            display.textContent = "Player wins " + playerWins +
            " to " + computerWins + "!";
            console.log("Player wins overall!");
        }
        else if (playerWins < computerWins) {
            display.textContent = "Computer wins " + computerWins +
            " to " + playerWins + "!";
            console.log("Computer wins overall!");
        }
        else {
            display.textContent = "How did you get here?? A tie shouldn't have happened!";
            console.log("How did you get here???");
        }
        // reset counters to give option of playing again
        playerWins = 0;
        computerWins = 0;
        ties = 0;
    }
}

// read in button clicks for player selection
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getPlayerChoice);
});
