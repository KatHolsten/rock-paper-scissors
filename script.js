let playerChoice = prompt('What do you choose? Rock, Paper or Scissors?').toLowerCase();
console.log('Player Choice: ' + playerChoice);

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log('Computer choice: ' + computerChoice);
    return computerChoice;
}

let result;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = '--> We have a tie. Nobody wins. <--';
        return result;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = '--> Rock crushes scissors. You win! <--';
        playerScore++;
        return result;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = '--> Paper covers rock. Therefore you win! <--';
        playerScore++;
        return result;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = '--> Scissors cuts paper, so YOU WIN! <--';
        playerScore++;
        return result;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = '--> Ooh, sorry. Paper covers rock. You have lost. <--';
        computerScore++;
        return result;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = '--> Scissors cuts through paper. Computer wins. <--';
        computerScore++;
        return result;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = '--> Rock crushes scissors. Sorry. You lose. <--';
        computerScore++;
        return result;
    }
}


const playerSelection = playerChoice;
playRound(playerChoice, computerPlay());
console.log(result);
console.log('Player Score : ' + playerScore);
console.log('Computer Score : ' + computerScore);
    

playerChoice = prompt('What do you choose? Rock, Paper or Scissors?').toLowerCase();
console.log('Player Choice: ' + playerChoice);
playRound(playerChoice, computerPlay());
console.log(result);
console.log('Player Score : ' + playerScore);
console.log('Computer Score : ' + computerScore);

playerChoice = prompt('What do you choose? Rock, Paper or Scissors?').toLowerCase();
console.log('Player Choice: ' + playerChoice);
playRound(playerChoice, computerPlay());
console.log(result);
console.log('Player Score : ' + playerScore);
console.log('Computer Score : ' + computerScore);

playerChoice = prompt('What do you choose? Rock, Paper or Scissors?').toLowerCase();
console.log('Player Choice: ' + playerChoice);
playRound(playerChoice, computerPlay());
console.log(result);
console.log('Player Score : ' + playerScore);
console.log('Computer Score : ' + computerScore);

playerChoice = prompt('What do you choose? Rock, Paper or Scissors?').toLowerCase();
console.log('Player Choice: ' + playerChoice);
playRound(playerChoice, computerPlay());
console.log(result);
console.log('Player Score : ' + playerScore);
console.log('Computer Score : ' + computerScore);

function declareVictory() {
    if (playerScore > computerScore) {
        return 'Congratulations. You have defeated the computer in this game.';
    } else if (computerScore > playerScore) {
        return 'The computer has defeated you. You are terminated.';
    } else {
        return 'What are the chances of that, huh!? Nobody won. Strange...';
    }
}

console.log(declareVictory());