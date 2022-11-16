let playerScore = 0;
let computerScore = 0;




const buttons = document.querySelectorAll('button');
const rock = document.getElementById('rock'); 
const paper = document.getElementById('paper'); 
const scissors = document.getElementById('scissors'); 








function game(){
const gameArray = ['rock', 'paper', 'scissors'];


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



console.log(`player: ${playerChoice}`);
console.log(`computer: ${computerFinalChoice}`);
oneRound(playerChoice, computerFinalChoice);
console.log(`You: ${playerScore}, Computer: ${computerScore}`);


if (computerScore > playerScore) {
    console.log('Computer is on the lead :(');
} else if (playerScore > computerScore) {
    console.log('You are on the lead!');
} else {console.log('It is a TIE!')};


};
let playerChoice = '';
buttons.forEach((button) => {
   button.addEventListener('click', function (e) {
      if (e.target == rock) {
         playerChoice = 'rock';
      } else if (e.target == paper) {
         playerChoice = 'paper';
      } else if (e.target == scissors) {
         playerChoice = 'scissors';
      } else console.log('error');
   game();
   });
   });




