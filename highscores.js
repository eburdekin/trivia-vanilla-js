const highScoresList = document.getElementById("high-scores-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const clearScoresBtn = document.getElementById("clear-scores");

clearScoresBtn.addEventListener("click", () => {
  localStorage.clear();
  highScores.length = 0;

  highScoresList.innerHTML = "Cleared!";

  if (highScores.length === 0) {
    clearScoresBtn.disabled = true;
  }
});

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.username} - ${score.score}</li>`;
  })
  .join("");
