const playerChoice = prompt('What do you choose? Rock, Paper or Scissors?').toLowerCase();
console.log('Player Choice: ' + playerChoice);

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log('Computer choice: ' + computerChoice);
    return computerChoice;
}

let result;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = 'We have a tie. Nobody wins.';
        return result;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'Rock crushes scissors. You win!';
        return result;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'Paper covers rock. Therefore you win!';
        return result;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'Scissors cuts paper, so YOU WIN!';
        return result;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = 'Ooh, sorry. Paper covers rock. You have lost.';
        return result;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 'Scissors cuts through paper. Computer wins.';
        return result;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'Rock crushes scissors. Sorry. You lose.';
        return result;
    }
}


    const playerSelection = playerChoice;
    playRound(playerChoice, computerPlay());
    console.log(result);