class Food {
  constructor() {
    this.size = squareSize;
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.x = Math.round(Math.random() * gameSize) % (gameSize / this.size - 1);
    this.y = Math.round(Math.random() * gameSize) % (gameSize / this.size - 1);
    console.log(this.x, this.y);
  }
  draw() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}
