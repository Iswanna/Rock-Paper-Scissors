// Add your code here
let playerSelection;
let computerSelection;
let count = 0;

const rockButton = document.querySelector("#button1");
const paperButton = document.querySelector("#button2");
const scissorsButton = document.querySelector("#button3");
const playButton = document.querySelector("#play");

function clickRockButton() {
  return "rock";
}

function clickPaperButton() {
  return "paper";
}

function clickScissorsButton() {
  return "scissors";
}

function getComputerChoice () {
  const guessArray = ["Rock", "Paper", "Scissors"];
  
  const randomly = Math.floor(Math.random() * guessArray.length);
  
  const randomlyGuessArray = guessArray[randomly].toLowerCase();

  return (randomlyGuessArray);
}

let rockSelection = rockButton.addEventListener("click", clickRockButton);
let paperSelection = paperButton.addEventListener("click", clickPaperButton);
let scissorsSelection = scissorsButton.addEventListener("click", clickScissorsButton);

if (rockSelection === "rock") {
  playerSelection = clickRockButton();

} else if (paperSelection === "paper") {
  playerSelection = clickPaperButton();
  
} else if (scissorsSelection === "scissors") {
  playerSelection = clickScissorsButton();
  
}


rockButton.addEventListener("click", clickRockButton);
paperButton.addEventListener("click", clickPaperButton);
scissorsButton.addEventListener("click", clickScissorsButton);
playButton.addEventListener("click", game);






function game(playerSelection, computerSelection) {
  


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

/*
console.log(game(playerSelection, computerSelection));






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
    
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
