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

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(playerSelection, computerSelection){
 
  if (playerSelection === "paper" && computerSelection === "rock" || 
     playerSelection === "rock" && computerSelection === "scissors" || 
     playerSelection === "scissors" && computerSelection === "paper"){
     console.log(`You won! ${playerSelection} beats ${computerSelection}`) 
     playerScore++       
     return console.log("PlayerScore: " + playerScore)
  }        

  if (playerSelection === computerSelection){
      console.log(`Tie - ${playerSelection} against ${computerSelection}`)
      tieScore++
      return console.log("TieScore: " + tieScore)
  }

  console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
  computerScore++
  console.log("ComputerScore: " + computerScore)
  return       
}         

let playerSelection = prompt("Hi! Type in your choice please: Scissors, Paper or Rock:");
playerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();

function game(){  
  
  playRound(playerSelection, computerSelection)
  
  computerSelection = getComputerChoice()
  playerSelection = prompt("Try #2: Type in your choice please: Scissors, Paper or Rock:");
  playerSelection = playerSelection.toLowerCase()        
  playRound(playerSelection, computerSelection)

  computerSelection = getComputerChoice()         
  playerSelection = prompt("Try #3: Type in your choice please: Scissors, Paper or Rock:");
  playerSelection = playerSelection.toLowerCase()
  playRound(playerSelection, computerSelection)

  computerSelection = getComputerChoice()
  playerSelection = prompt("Try #4: Type in your choice please: Scissors, Paper or Rock:");
  playerSelection = playerSelection.toLowerCase()
  playRound(playerSelection, computerSelection)

  computerSelection = getComputerChoice()
  playerSelection = prompt("Try #5: Type in your choice please: Scissors, Paper or Rock:");
  playerSelection = playerSelection.toLowerCase()
  playRound(playerSelection, computerSelection)

  console.log("PlayerScore: " + playerScore)
  console.log("ComputerScore: " + computerScore)
  console.log("TieScore: " + tieScore)

  if(playerScore > computerScore){
      console.log(`Congratulations! You won this game with a score ${playerScore} : ${computerScore}`)
      return;
  }

  if (playerScore < computerScore){
      console.log(`Unfortunately you lost this game with a score ${computerScore} : ${playerScore}` )
      return;
  }
  consol.log(`Tie! ${playerScore} : ${computerScore}`)        
}  

game()        