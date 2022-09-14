const gameSize = 600;
const squareSize = 20;
const snake = new Snake(squareSize);

function update() {
  setTimeout(update, 300);
}
function start() {
  update();
}
start();
