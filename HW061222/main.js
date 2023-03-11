const items = ["stone", "scissors", "paper"];

const divUsers = document.querySelector(".users");
const startBtn = document.querySelector(".start-btn");
const gameItems = document.querySelector(".game-items");
const divStartRound = document.querySelector(".start-round");
const startRoundTitle = document.querySelector(".start-round-title");
const divPlayerChoice = document.querySelector(".player-choice");
const itemImage = document.querySelectorAll(".item-image");
const divBattle = document.querySelector(".battle");
let playerItem = document.createElement("img");
let compItem = document.createElement("img");
const compScore = document.querySelector(".comp-score");
const playerScore = document.querySelector(".player-score");
const divMessage = document.querySelector(".message");
let title = document.createElement("h4");
let nextButton = document.createElement("button");
let stopTitle = document.createElement("h1");


let userMove = 0;
let userCount = 0;
let compMove = 0;
let compCount = 0;
let message = "";
let roundCount = 1;

function startGame() {
  startBtn.onclick = (event) => {
    event.target.style.display = "none";
    gameItems.style.display = "none";
    divStartRound.style.display = "block";
    divPlayerChoice.style.display = "block";
  }
}

function playRound() {
  roundCount++;

  for (const item of itemImage) {
    item.onclick = () => {

      divPlayerChoice.style.display = "none";

      if (item.classList[1] == "stone") {
        userMove = 0;
      } else if (item.classList[1] == "scissors") {
        userMove = 1;
      } else userMove = 2;
;
      playerItem.setAttribute("src", `images/${item.classList[1]}-p.png`);
      playerItem.className = "player-item";

      let compMove = Math.floor(Math.random() * 3);
      compItem.setAttribute("src", `images/${items[compMove]}-c.png`);
      compItem.className = "comp-item";



      if (compMove == 0 && userMove == 1) {
        playerScore.innerHTML = +playerScore.innerHTML + 1;
        message = "Player WIN!!!"; userCount++;
      } else if (compMove == 0 && userMove == 2) {
        playerScore.innerHTML = +playerScore.innerHTML + 1;
        message = "Player WIN!!!"; userCount++;
      } else if (compMove == 1 && userMove == 0) {
        compScore.innerHTML = +compScore.innerHTML + 1;
        message = "Computer WIN!!!"; compCount++;
      } else if (compMove == 1 && userMove == 2) {
        compScore.innerHTML = +compScore.innerHTML + 1;
        message = "Computer WIN!!!"; compCount++;
      } else if (compMove == 2 && userMove == 0) {
        compScore.innerHTML = +compScore.innerHTML + 1;
        message = "Computer WIN!!!"; compCount++;
      } else if (compMove == 2 && userMove == 1) {
        playerScore.innerHTML = +playerScore.innerHTML + 1;
        message = "Player WIN!!!"; userCount++;
      } else message = "Both WIN!!!"
      title.innerText = message;
      title.style.textAlign = "center";
      divBattle.append(compItem, playerItem, title);
      console.log("userCount = " + userCount + "compCount = " + compCount);

      if (roundCount > 3) {
      stopGame();
      console.log(roundCount);
    } else nextRound();
    }
  }
}

function nextRound() {
  nextButton.innerText = "NEXT ROUND >>";
  nextButton.className = "next-round-btn";
  divMessage.append(nextButton);

  nextButton.onclick = () => {
    startRoundTitle.innerText = `${roundCount} ROUND!`

    

    divMessage.innerHTML = "";


    gameItems.style.display = "none";

    divBattle.innerHTML = "";
    divPlayerChoice.style.display = "block";
    playRound();
  }
}

function stopGame(){
stopTitle.innerText = "GAME OVER!";
divStartRound.innerHTML = "";
divStartRound.append(stopTitle);

if (userCount > compCount){
  message = "You WIN!!! Congratulations!"
} else if (userCount < compCount){
  message = "You Loose. Computer WIN!"
} else message = "Dead Heat!";
title.innerText = message;
divMessage.append(title);

}
startGame();
playRound();

