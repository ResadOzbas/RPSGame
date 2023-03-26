let compArray = ['rock','paper','scissors'];

function getComputerChoice(array){
    return array[Math.floor(Math.random() * array.length)];
    
}

console.log(getComputerChoice(compArray));