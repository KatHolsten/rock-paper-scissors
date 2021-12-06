//user enters a choice into a prompt
let userChoice = prompt('What do you choose? Rock, Paper or Scissors?').toLowerCase();
console.log('User choice: ' + userChoice);
    
//computer randomly generates a choice and compares it to userChoice
   function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log('Computer choice: ' + computerChoice);

    if (computerChoice === userChoice) {
        alert('A tie! Nobody wins.');
    }
    
    if (computerChoice === 'rock' && userChoice === 'paper') {
        alert('You won! Paper covers rock.');
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        alert('You have lost.. Rock breaks scissors.');
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        alert('You have lost.. Paper covers rock.');
    }

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        alert('Yeah you won! Scissors cuts paper!');
    }

    if (computerChoice === 'scissors' && userChoice === 'rock') {
        alert('You won. Rock breaks scissors.');
    }

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        alert('Sorry. Scissors cuts paper. You have lost.');
    } 
}

computerPlay();

