"use strict";

console.log(document.querySelector(".score").textContent);
let highScore = 0;
let playerScore = 20;
let gameNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
    // PLAYER WIN
  } else if (guess === gameNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = gameNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (playerScore > highScore) {
      highScore = playerScore;
      document.querySelector(".highscore").textContent = highScore;
    }
    // GUESS TOO HIGH
  } else if (guess > gameNumber) {
    if (playerScore > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      playerScore--;
      document.querySelector(".score").textContent = playerScore;
    } else {
      document.querySelector(".message").textContent = "💥 You Lost the Game!";
      document.querySelector(".score").textContent = 0;
    }
    // GUESS TOO LOW
  } else if (guess < gameNumber) {
    if (playerScore > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      playerScore--;
      document.querySelector(".score").textContent = playerScore;
    } else {
      document.querySelector(".message").textContent = "💥 You Lost the Game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  playerScore = 20;
  gameNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = playerScore;
  document.querySelector(".highscore").textContent = "0";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
