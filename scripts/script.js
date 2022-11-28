// Add your code here

function getComputerChoice () {
    const guessArray = ["Rock", "Paper", "Scissors"];
    
    const randomly = Math.floor(Math.random() * guessArray.length);
   
    const randomlyGuessArray = guessArray[randomly].toLowerCase();
  
    return (randomlyGuessArray);
  }
  
  
  let playerSelection;
  let computerSelection;
  let count = 0;
  
  function game(playerSelection, computerSelection) {
    playerSelection = (prompt("Guess Rock or Paper or Scissors")).toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    
    if (playerSelection === computerSelection) {
      console.log(count = count + 0);
      return("It is a draw!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(count = count + 0);
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(count = count + 1);
        return(`You won! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(count = count + 1);
        return(`You won! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(count = count + 0);
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
         console.log(count = count + 0);
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(count = count + 1);
        return(`You won! ${playerSelection} beats ${computerSelection}`);
    } else {
        console.log(count = count + 0);
        return("Oops! something went wrong");
    }
  
  }
  
  
  
  
  
  for (i=0; i<5; i++) {
        console.log(game(playerSelection, computerSelection));
  }
  
  alert(count);
  alert("GAME OVER");
  
  if (count >= 3) {
    alert("You won the Game");
  } else {
    alert("You lose the Game");
  }
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
