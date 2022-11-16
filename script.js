let playerScore = 0;
let computerScore = 0;




const buttons = document.querySelectorAll('button');
const rock = document.getElementById('rock'); 
const paper = document.getElementById('paper'); 
const scissors = document.getElementById('scissors'); 
const container = document.querySelector('div');






function game(){
const gameArray = ['rock', 'paper', 'scissors'];


function oneRound(playerChoice, computerFinalChoice) {


if (playerChoice === 'rock' && computerFinalChoice === 'paper') {  
    paraResult.textContent = 'Paper beats Rock, you LOSE!';
    return computerScore++;
} else if (playerChoice === 'rock' && computerFinalChoice === 'scissors') {
   paraResult.textContent = 'Rock beats Scissors, you WIN!'; 
    return playerScore++;
} else if (playerChoice === 'rock' && computerFinalChoice === 'rock') {
   paraResult.textContent = 'It\'s a draw!';
} else if (playerChoice === 'paper' && computerFinalChoice === 'paper') {
   paraResult.textContent = 'It\'s a draw!';
} else if (playerChoice === 'paper' && computerFinalChoice === 'scissors') {
   paraResult.textContent = 'Scissors beats Paper, you LOSE!';
   return computerScore++;
} else if (playerChoice === 'paper' && computerFinalChoice === 'rock') {
   paraResult.textContent = 'Paper beats Rock, you WIN!';
   return playerScore++;
} else if (playerChoice === 'scissors' && computerFinalChoice === 'paper') {
   paraResult.textContent = 'Scissors beats Paper, you WIN!';
   return playerScore++;
} else if (playerChoice === 'scissors' && computerFinalChoice === 'scissors') {
   paraResult.textContent = 'It\'s a draw!';
} else if (playerChoice === 'scissors' && computerFinalChoice === 'rock') {
   paraResult.textContent = 'Rock beats Scissors, you LOSE!';
   return computerScore++;
   } else {console.log('something is wrong');};
}


function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * gameArray.length);
    let computerChoice = gameArray[randomNumber];
    return computerChoice;
} 
 
const computerFinalChoice = getComputerChoice();

const paraChoice = document.getElementById('paraChoice');
const paraResult = document.getElementById('paraResult');
const paraScore = document.getElementById('paraScore');
const paraLead = document.getElementById('paraLead');


console.log(`player: ${playerChoice}`);
console.log(`computer: ${computerFinalChoice}`);
oneRound(playerChoice, computerFinalChoice);
console.log(`You: ${playerScore}, Computer: ${computerScore}`);

paraChoice.textContent = `Your choice: ${playerChoice}, Computer choice: ${computerFinalChoice}`;
paraScore.textContent = `You: ${playerScore}, Computer: ${computerScore}`;




if (computerScore > playerScore && computerScore == 5) {
   paraLead.textContent = 'Computer Won :( Better Luck Next Time!!';
} else if (playerScore > computerScore && playerScore == 5) {
  paraLead.textContent = 'YOU WON! CONGRATULATIONS!!'
} else if (computerScore > playerScore) {
    paraLead.textContent = 'Computer is on the lead :(';
} else if (playerScore > computerScore) {
    paraLead.textContent = 'You are on the lead!';
} else if (playerScore == computerScore) {
    paraLead.textContent = 'It is a TIE!';
} else {alert('something is wrong')};




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




