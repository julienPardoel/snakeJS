const gameSize = 600;
const squareSize = 20;
const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");
const snake = new Snake(squareSize);
let currentDirection = "right";

function deteckKeyPressed() {
  document.addEventListener("keydown", function (event) {
    console.log(event.key);

    switch (event.key) {
      case "ArrowLeft":
        currentDirection = "left";
        break;

      case "ArrowRight":
        currentDirection = "right";
        break;

      case "ArrowDown":
        currentDirection = "down";
        break;

      case "ArrowUp":
        currentDirection = "up";
        break;

      default:
        break;
    }
  });
}

function clearScreen() {
  ctx.clearRect(0, 0, gameSize, gameSize);
}

function update() {
  clearScreen();
  snake.update();
  setTimeout(update, 200);
}
function start() {
  deteckKeyPressed();
  update();
}
start();
