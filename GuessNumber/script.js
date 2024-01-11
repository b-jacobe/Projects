"use strict";

console.log(document.querySelector(".score").textContent);

let playerScore = 20;
const gameNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = gameNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
  } else if (guess === gameNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  } else if (guess > gameNumber) {
    if (playerScore > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      playerScore--;
      document.querySelector(".score").textContent = playerScore;
    } else {
      document.querySelector(".message").textContent = "💥 You Lost the Game!";
      document.querySelector(".score").textContent = 0;
    }
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
