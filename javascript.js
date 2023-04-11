
/*
playRound(getComputerChoice,playerChoice);
*/

let compArray = ['rock','paper','scissors'];
let myScore = 0;
let oppScore = 0;

function getComputerChoice(array){
    return array[Math.floor(Math.random() * array.length)];
    
}

function playRound(getComputerChoice1,playerChoice){
    if (getComputerChoice1 == playerChoice){
        return 'Draw!';
    } else if((getComputerChoice1=='rock' & playerChoice == 'paper')||(getComputerChoice1=='paper' & playerChoice == 'scissors')||(getComputerChoice1=='scissors' & playerChoice == 'rock') ){
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
      result.textContent = playRound(getComputerChoice(compArray),button.className);
    
      if (result.textContent == 'you win!'){
        myScore += 1;
      }else if(result.textContent == 'you lose!'){
        oppScore += 1;
      }else{
        
      }

      if (myScore == 5){
        result.textContent = 'Player Wins!'
        myScore = 0
        oppScore = 0
      }else if (oppScore == 5){
        result.textContent = 'Computer Wins!'
        myScore = 0
        oppScore = 0
      }else{}

      playerScore.textContent = myScore;
      compScore.textContent = oppScore;
    }))
  });