const gameSize = 600;
const squareSize = 20;
const snake = new Snake(squareSize);
const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

function update() {
  snake.update();
  setTimeout(update, 300);
}
function start() {
  update();
}
start();
