
/*
let compArray = ['rock','paper','scissors'];


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
*/
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector(".rock");
    const result = document.querySelector(".result");
  
    button.addEventListener('click', function(){
      result.textContent = button.className;
    });
  });