let playerScore = 0;
let computerScore = 0;


function game(){
const gameArray = ['rock', 'paper', 'scissors'];

for (let i = 0; i < 5; i++) {

function oneRound(playerChoice, computerFinalChoice) {

if (playerChoice === 'rock' && computerFinalChoice === 'paper') {  
    console.log('Paper beats Rock, you LOSE!');
    return computerScore++;
} else if (playerChoice === 'rock' && computerFinalChoice === 'scissors') {
    console.log('Rock beats Scissors, you WIN!'); 
    return playerScore++;
} else if (playerChoice === 'rock' && computerFinalChoice === 'rock') {
   console.log('It\'s a draw!');
} else if (playerChoice === 'paper' && computerFinalChoice === 'paper') {
   console.log('It\'s a draw!');
} else if (playerChoice === 'paper' && computerFinalChoice === 'scissors') {
   console.log('Scissors beats Paper, you LOSE!');
   return computerScore++;
} else if (playerChoice === 'paper' && computerFinalChoice === 'rock') {
   console.log('Paper beats Rock, you WIN!');
   return playerScore++;
} else if (playerChoice === 'scissors' && computerFinalChoice === 'paper') {
   console.log('Scissors beats Paper, you WIN!');
   return playerScore++;
} else if (playerChoice === 'scissors' && computerFinalChoice === 'scissors') {
   console.log('It\'s a draw!');
} else if (playerChoice === 'scissors' && computerFinalChoice === 'rock') {
   console.log('Rock beats Scissors, you LOSE!');
   return computerScore++;
   } else {console.log('something is wrong');};
}


function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * gameArray.length);
    let computerChoice = gameArray[randomNumber];
    return computerChoice;
} 
 
const computerFinalChoice = getComputerChoice();
const playerChoice = prompt('rock, paper or scissors?').toLowerCase();


console.log(`player: ${playerChoice}`);
console.log(`computer: ${computerFinalChoice}`);
oneRound(playerChoice, computerFinalChoice);
console.log(`You: ${playerScore}, Computer: ${computerScore}`);
}
if (computerScore > playerScore) {
    console.log('Computer have WON!');
} else if (playerScore > computerScore) {
    console.log('YOU HAVE WON!!');
} else {console.log('It is a TIE!')};


};
game();


