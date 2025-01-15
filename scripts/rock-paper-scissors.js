// my paragapth inner html
const updateOnTheGame = document.querySelectorAll(".paragraphs-result p");
console.log(updateOnTheGame);

//declaring my veriables

const gameButtons = document.querySelectorAll(".game-buttons");
let htmlResult = document.querySelector(".result-of-game");
let htmlAnswers = document.querySelector(".result-of-answers");
let htmlScore = document.querySelector(".result-of-score");
console.log(gameButtons);

// variables for buttons to add colors
const buttonsChangeColor = document.querySelectorAll(".change-color button");

let buttoncolor1 = document.querySelector(".button-color1");
let buttoncolor2 = document.querySelector(".button-color2");
let buttoncolor3 = document.querySelector(".button-color3");
console.log(buttoncolor1);

console.log(buttonsChangeColor);
// Inner html
let playerComputerScore = document.querySelector(".playerComputerScore");

playerComputerScore.innerHTML = "";

if (localStorage.getItem("score-html") !== "") {
  const scoreHtml = JSON.parse(localStorage.getItem("score-html"));
  console.log(scoreHtml);
}

const score = JSON.parse(localStorage.getItem("score")) || {
  losses: 0,
  wins: 0,
  losses: 0,
};

// for computer score and player

const computerS = JSON.parse(localStorage.getItem("computerScore")) || {
  ties: 0,
  wins: 0,
  losses: 0,
};

playerComputerScore.innerHTML = `computer has wins: ${computerS.wins} and losses: ${computerS.losses} and ties: ${computerS.ties}`;

console.log(computerS);

// same thing as above text only that it uses a or opratort
// if (!score) {
//   score = {
//     losses: 0,
//     wins: 0,
//     losses: 0,
//   };
// }

// function to reset score

const keepscore = {
  first: "round-one",
  second: "round-two",
  third: "round-three",
};

console.log(keepscore.first);

function resetButton() {
  localStorage.removeItem("computerScore");
  localStorage.removeItem("score");
  localStorage.removeItem("score-html");

  score.losses = 0;
  score.wins = 0;
  score.ties = 0;
  // computer move
  computerS.ties = 0;
  computerS.wins = 0;
  computerS.losses = 0;
  localStorage.removeItem("score");
  updateOnTheGame[0].innerHTML = "";
  updateOnTheGame[1].innerHTML = "";
  htmlScore.innerHTML = `wins: ${score.wins} losses:${score.losses} ties:${score.ties}`;
  playerComputerScore.innerHTML = `computer has wins: ${computerS.wins} and losses: ${computerS.losses} and ties: ${computerS.ties}`;
}

// object for colors

// connect the resutl to the with the object of the score

let computerMove = "";
function defineComputerMove() {
  const randomeNumber = Math.random();
  if (randomeNumber > 0 && randomeNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomeNumber > 1 / 3 && randomeNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomeNumber > 2 / 3 && randomeNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

// autoplay function
let isAutoPLaying = false;
//set to false from the beggning
let intervalId;

function autoPlay() {
  //this checks if isAutoPLaying is false
  //set interval wil keep running without need of me of clicking anything here is the trick
  //if click autoplay again - now isAutoPLaying will be true so it
  //will skip and go to the else
  if (!isAutoPLaying) {
    intervalId = setInterval(() => {
      playerMove = defineComputerMove();
      playGame(playerMove);
    }, 3000);
    isAutoPLaying = true;
  } else {
    //here we set the isAutoplaying back to false and
    // will only run again if we call autoPLay() function
    //We also clear the interval not allowing for it to run again
    //this not letting the loop to keep going
    //its about knowing when the function is called and if
    //isAutoPlaying is set to false or true
    clearInterval(intervalId);
    isAutoPLaying = false;
  }
}

let result = "";
function playGame(playerMove) {
  defineComputerMove();
  if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      result = "You tie";
      score.ties++;
      computerS.ties++;

      console.log(computerS.ties);
    } else if (computerMove === "rock") {
      result = "You lose";
      score.losses++;
      computerS.wins++;

      console.log(computerS.wins);
    } else if (computerMove === "paper") {
      result = "You win";
      score.wins++;
      computerS.losses++;

      console.log(computerS.losess);
    }
  }
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "You tie";
      score.ties++;
      computerS.ties++;
    } else if (computerMove === "paper") {
      result = "You lose";
      score.wins++;
      computerS.losses++;
    } else if (computerMove === "scissors") {
      result = "You win ";
      score.losses++;
      computerS.wins++;
    }
  }
  if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "You tie";
      score.ties++;
      computerS.ties++;
    } else if (computerMove === "scissors") {
      result = "You lose";
      score.losses++;
      computerS.wins++;
    } else if (computerMove === "rock") {
      result = "You win";
      keepscore.wins = "win-user";
      score.wins++;
      computerS.losses++;
    }
  }
  changeTheColors();

  localStorage.setItem("computerScore", JSON.stringify(computerS));
  localStorage.setItem("score", JSON.stringify(score));

  console.log(
    `You picked ${playerMove}. Computer picked ${computerMove}. You ${result}.
        wins: ${score.wins} losses:${score.losses} ties:${score.ties}
        users wins: ${computerS.wins} users losess: ${computerS.losses} users: ties ${computerS.ties} `
  );
  htmlAnswers.innerHTML = `${result}`;
}

function changeTheColors() {
  buttonsChangeColor.forEach((button) => {
    button.style.backgroundColor = "";
    console.log("i am here");
  });
}

gameButtons.forEach((activate) => {
  let forEachButton = activate;
  console.log(forEachButton);
  forEachButton.addEventListener("click", () => {
    htmlAnswers.innerHTML = `You picked ${forEachButton.innerHTML} - Computer picked ${computerMove}`;
    htmlResult.innerHTML = `${result}`;
    htmlScore.innerHTML = `Wins: ${score.wins} Losses:${score.losses} Ties:${score.ties}`;
    playerComputerScore.innerHTML = `computer has wins: ${computerS.wins} and losses: ${computerS.losses} and ties: ${computerS.ties}
    round one is: ${keepscore.wins} round two is: ${keepscore.losses} round three is ${keepscore.ties}`;
    localStorage.setItem("score-html", JSON.stringify(htmlScore.innerHTML));
  });
});

console.log(computerS);

console.log(result);
