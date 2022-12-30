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
const actionMessage = document.getElementById("action-message");
let count = 0;

function getComputerChoice () {
  const guessArray = ["Rock", "Paper", "Scissors"];
  
  const randomly = Math.floor(Math.random() * guessArray.length);
  
  const randomlyGuessArray = guessArray[randomly].toLowerCase();

  return (randomlyGuessArray);
}


function win(userSelection, computerSelection) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  userScore += 1;
  computerScore += 0;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  result = `You won! ${userSelection}${smallUserWord} beats ${computerSelection}${smallComputerWord}`;
  resultDiv.innerHTML = result;
  resultDiv.style.cssText = "text-align: center; font-family: Asap, sans-serif";
  document.getElementById(userSelection).classList.add('green-glow');
  setTimeout(function() {document.getElementById(userSelection).classList.remove('green-glow');}, 300);
}

function lose(userSelection, computerSelection) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  userScore += 0;
  computerScore += 1;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  result = `You Lose! ${computerSelection}${smallComputerWord} beats ${userSelection}${smallUserWord}`;
  resultDiv.innerHTML = result;
  resultDiv.style.cssText = "text-align: center; font-family: Asap, sans-serif";
  document.getElementById(userSelection).classList.add('red-glow');
  setTimeout(function() {document.getElementById(userSelection).classList.remove('red-glow');}, 300);
}

function draw(userSelection, computerSelection) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  userScore += 0;
  computerScore += 0;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  result = `It is a draw! ${userSelection}${smallUserWord} equals ${computerSelection}${smallComputerWord}`;
  resultDiv.innerHTML = result;
  resultDiv.style.cssText = "text-align: center; font-family: Asap, sans-serif";
  document.getElementById(userSelection).classList.add('grey-glow');
  setTimeout(function() {document.getElementById(userSelection).classList.remove('grey-glow');}, 300);
}

function fiveRounds() {
  resultDiv.innerHTML = "GAME OVER!";

  if (userScoreSpan.innerHTML > computerScoreSpan.innerHTML) {
    setTimeout(function () {resultDiv.innerHTML = "Congratulations! You won the game";}, 1000);
    
  } else {
    setTimeout(function() {resultDiv.innerHTML = "Sorry! You lost the game";}, 1000);
   
  } 
  

  
 

}


function game(userSelection) {
  const computerSelection = getComputerChoice();
  let result = "";
  
  console.log(count);

  if (userSelection === computerSelection) {
    draw(userSelection, computerSelection);
  } else if (userSelection === "rock" && computerSelection === "paper") {
    lose(userSelection, computerSelection); 
  } else if (userSelection === "rock" && computerSelection === "scissors") {
    win(userSelection, computerSelection);
  } else if (userSelection === "paper" && computerSelection === "rock") {
    win(userSelection, computerSelection);
  } else if (userSelection === "paper" && computerSelection === "scissors") {
    lose(userSelection, computerSelection); 
  } else if (userSelection === "scissors" && computerSelection === "rock") {
    lose(userSelection, computerSelection); 
  } else if (userSelection === "scissors" && computerSelection === "paper") {
    win(userSelection, computerSelection);
  } else {
    userScore += 0;
    computerScore += 0;
    result = "Oops! something went wrong";
  }
 
  
}

function whenGameOver() {
  resultDiv.innerHTML = "GAME OVER!";
  if (userScoreSpan.innerHTML > computerScoreSpan.innerHTML) {
    setTimeout(function () {resultDiv.innerHTML = "Congratulations! You won the game";}, 1000);
    actionMessage.innerHTML = "CLICK ANYWHERE TO TRY AGAIN!";
    actionMessage.style.backgroundColor = "blue";
    
  } else if (userScoreSpan.innerHTML < computerScoreSpan.innerHTML) {
    setTimeout(function() {resultDiv.innerHTML = "Sorry! You lost the game";}, 1000);
    actionMessage.innerHTML = "CLICK ANYWHERE TO TRY AGAIN!";
    actionMessage.style.backgroundColor = "red";
   
  } else {
    setTimeout(function() {resultDiv.innerHTML = "The game is a draw!";}, 1000);
    actionMessage.innerHTML = "CLICK ANYWHERE TO TRY AGAIN!";
    actionMessage.style.backgroundColor = "grey";
  }

  document.addEventListener("click", function() {
    if(resultDiv.innerHTML === "Congratulations! You won the game" || resultDiv.innerHTML === "Sorry! You lost the game") {
      location.reload();
    }
  })
}




  

  

rockChoice.addEventListener("click", function() {
  count += 1;
  if(count <=5 ) {
    game("rock");
  } else if (count === 6) {
      whenGameOver();
  }
  
})

paperChoice.addEventListener("click", function() {
  count += 1;
  if (count <= 5) {
    game("paper");
  } else if (count === 6) {
      whenGameOver(); 
  }
  
})

scissorsChoice.addEventListener("click", function() {
  count += 1;
  if (count <= 5) {
    game("scissors");
  } else if (count === 6) {
      whenGameOver();
  }
  
})




















 
  
  
  
  
  
  
  
