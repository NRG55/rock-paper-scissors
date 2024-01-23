const rock = 1;
const paper = 2;
const scissors = 3;

function getComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 3) + 1       

  if(randomNumber === rock){
      return 'rock'; 
  }    
  if(randomNumber === paper){           
      return 'paper';             
  }       
  return  'scissors'                
} 

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');


let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(playerSelection, computerSelection){

  const info = document.querySelector('.info');
  const score = document.querySelector('.score');  

  if (playerSelection === "paper" && computerSelection === "rock" || 
     playerSelection === "rock" && computerSelection === "scissors" || 
     playerSelection === "scissors" && computerSelection === "paper"){      
     
     playerScore++     
     info.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
     score.textContent = `${playerScore} : ${computerScore}`;     
     return; 
  }        

  if (playerSelection === computerSelection){      
      
      tieScore++
      info.textContent = `Tie - ${playerSelection} against ${computerSelection}`;
      score.textContent = `${playerScore} : ${computerScore}`;
      return;      
  }  
  
  computerScore++
  info.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
  score.textContent = `${playerScore} : ${computerScore}`;  
  return;       
}

document.querySelector('.computerInfo').disabled = true;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {

    if (button.id === 'btnRock'){

      playerSelection = "rock";      
      return game();     
    }

    if (button.id === 'btnPaper'){

      playerSelection = "paper";
      return game();    
    }

    if (button.id === 'btnScissors'){

      playerSelection = "scissors";
      return game();      
    } 
  }) 
})

let computerSelection = getComputerChoice();  

function game() { 
  
  playRound(playerSelection, computerSelection)
  
  const btnRockComputer = document.querySelector('#btnRockComputer');
  const btnPaperComputer = document.querySelector('#btnPaperComputer');
  const btnScissorsComputer = document.querySelector('#btnScissorsComputer');

  if (computerSelection === 'rock'){
    
    btnRockComputer.classList.add('active');
    btnPaperComputer.classList.remove('active');
    btnScissorsComputer.classList.remove('active');    
  }

  if (computerSelection === 'paper'){
    
    btnRockComputer.classList.remove('active');
    btnPaperComputer.classList.add('active');
    btnScissorsComputer.classList.remove('active');    
  }

  if (computerSelection === 'scissors'){
    
    btnRockComputer.classList.remove('active');
    btnPaperComputer.classList.remove('active');
    btnScissorsComputer.classList.add('active');    
  }  
  
  computerSelection = getComputerChoice();  

  console.log("PlayerScore: " + playerScore)
  console.log("ComputerScore: " + computerScore)
  console.log("TieScore: " + tieScore)  

  if(playerScore === 5){
  
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;

    const info = document.querySelector('.info');
    const btnRestart = document.querySelector('#btnRestart');
    
    info.classList.add('infoActive');
    btnRestart.classList.add('btnRestartActive');

    info.textContent = `Congratulations! You won this game with a score ${playerScore} : ${computerScore}`
    
    btnRestart.disabled = false;
    btnRestart.textContent = 'RESTART';      
   return;
  }

  if(computerScore === 5){
  
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;

    const info = document.querySelector('.info');
    const btnRestart = document.querySelector('#btnRestart');


   
    info.textContent = `Unfortunately you lost this game with a score ${playerScore} : ${computerScore}`;
    info.style.color = 'red';
    info.style.fontSize = "25px";
    btnRestart.style.background = 'rgb(69, 133, 216)';
    btnRestart.disabled = false;
    btnRestart.textContent = 'RESTART';     
    return;
  }      
}  






      