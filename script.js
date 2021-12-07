
//The computer makes a random selection and returns it's choice.
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
   if (computerSelection === playerSelection) {
       console.log('It\'s a tie! Nobody wins. Two rocks.');
   } 
   
   if (computerSelection == 'rock' && playerSelection == 'paper') {
       console.log('Oooh! You win! Paper covers rock.');
   }
   
   if (computerSelection == 'rock' && playerSelection == 'scissors') {
       console.log('Awh, sorry. You lose. Rock crushes scissors.');
   }
   
   if (computerSelection == 'paper' && playerSelection == 'rock') {
       console.log('Aw man, you lose. Paper covers rock.');
   }
   
   if (computerSelection == 'paper' && playerSelection == 'scissors') {
       console.log('Ooh! You win! Scissors definitely cuts paper.');
   }
   
   if (computerSelection == 'scissors' && playerSelection == 'rock') {
       console.log('Yay! You win. Rock crushes scissors.');
   }
   
   if (computerSelection == 'scissors' && playerSelection == 'paper') {
       console.log('Oh no! You lost. Scissors cuts paper.');
   }
   
   if (playerSelection == ' ') {
       console.log('Please choose between paper, rock or scissors.');
   }
}

//The user is prompted to enter a selection and the text is converted to all lowercase
let playerSelection = prompt('What do you choose? Rock, Paper or Scissors?').toLowerCase();

//The result from computerPlay function is stored inside computerSelection variable
let computerSelection = computerPlay();

playRound();

