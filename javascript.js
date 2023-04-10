
/*
playRound(getComputerChoice,playerChoice);
*/

let compArray = ['rock','paper','scissors'];
let myScore = 0;
let oppScore = 0;

function getComputerChoice(array){
    return array[Math.floor(Math.random() * array.length)];
    
}

function playRound(getComputerChoice,playerChoice){
    if (getComputerChoice(compArray) == playerChoice){
        return 'Draw!';
    } else if((getComputerChoice(compArray)=='rock' & playerChoice == 'paper')||(getComputerChoice(compArray)=='paper' & playerChoice == 'scissors')||(getComputerChoice(compArray)=='scissors' & playerChoice == 'rock') ){
        return 'you win!';
    } else{
        return 'you lose!';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll("button");
    const result = document.querySelector(".result");
    const playerScore = document.querySelector(".player");
    const compScore = document.querySelector(".comp");
  
    buttons.forEach(button => button.addEventListener('click', function(){
      result.textContent = playRound(getComputerChoice,button.className);
    
      if (result.textContent == 'you win!'){
        myScore += 1;
      }else if(result.textContent == 'you lose!'){
        oppScore += 1;
      }else{
        
      }
      playerScore.textContent = myScore;
      compScore.textContent = oppScore;
    }))
  });