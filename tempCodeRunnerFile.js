let compArray = ['rock','paper','scissors'];
let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase

function getComputerChoice(array){
    return array[Math.floor(Math.random() * array.length)];
    
}

function playRound(getComputerChoice,playerChoice){
    if (getComputerChoice(compArray) == playerChoice){
        console.log('Draw!')
    } else if((getComputerChoice=='rock' & playerChoice == 'paper')||(getComputerChoice=='paper' & playerChoice == 'scissors')||(getComputerChoice=='scissors' & playerChoice == 'rock') ){
        console.log('you win!');
    } else{
        console.log('you lose!')
    }
}

playRound(getComputerChoice,playerChoice);
