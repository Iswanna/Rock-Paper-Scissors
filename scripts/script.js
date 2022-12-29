// Add your code here
// catch your DOM first

let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result");
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");

function getComputerChoice () {
  const guessArray = ["Rock", "Paper", "Scissors"];
  
  const randomly = Math.floor(Math.random() * guessArray.length);
  
  const randomlyGuessArray = guessArray[randomly].toLowerCase();

  return (randomlyGuessArray);
}



function game(playerSelection) {
  const computerSelection = getComputerChoice();
  let result = "";
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    userScore += 0;
    computerScore += 0;
    rockChoice.style.cssText= "background: grey";
    result = "It is a draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    userScore += 0;
    computerScore += 1;
    rockChoice.style.cssText= "background: red";
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result = `You Lose! ${computerSelection}${smallComputerWord} beats ${playerSelection}${smallUserWord}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    userScore += 1;
    computerScore += 0;
    rockChoice.style.cssText= "background: green";
    result = `You won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userScore += 1;
    computerScore += 0;
    paperChoice.style.cssText= "background: green";
    result = `You won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    userScore += 0;
    computerScore += 1;
    rockChoice.style.cssText= "background: red";
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result = `You Lose! ${computerSelection}${smallComputerWord} beats ${playerSelection}${smallUserWord}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    userScore += 0;
    computerScore += 1;
    rockChoice.style.cssText= "background: red";
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    result = `You Lose! ${computerSelection}${smallComputerWord} beats ${playerSelection}${smallUserWord}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userScore += 1;
    computerScore += 0;
    scissorsChoice.style.cssText= "background: green";
    result = `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    userScore += 0;
    computerScore += 0;
    result = "Oops! something went wrong";
  }

  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  resultDiv.innerHTML = result;
  resultDiv.style.cssText = "text-align: center; font-family: Asap, sans-serif";
  
}

rockChoice.addEventListener("click", function() {
  game("rock")
})

paperChoice.addEventListener("click", function() {
  game("paper")
})

scissorsChoice.addEventListener("click", function() {
  game("scissors")
})
























/*
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
*/

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
  
  
  
  
  
  
  
  
  
  
  
  
  
