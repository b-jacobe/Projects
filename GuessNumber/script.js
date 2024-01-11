"use strict";

let highScore = 0;
let playerScore = 20;
let gameNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // NO INPUT
  if (!guess) {
    displayMessage("⛔ No Number!");
    // PLAYER WIN
  } else if (guess === gameNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = gameNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (playerScore > highScore) {
      highScore = playerScore;
      document.querySelector(".highscore").textContent = highScore;
    }
    // GUESS TOO HIGH
  } else if (guess !== gameNumber) {
    if (playerScore > 1) {
      displayMessage(guess > gameNumber ? "📈 Too High!" : "📉 Too Low!");
      playerScore--;
      document.querySelector(".score").textContent = playerScore;
    } else {
      displayMessage("💥 You Lost the Game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  playerScore = 20;
  gameNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = playerScore;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
