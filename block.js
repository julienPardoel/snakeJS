class Block {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  teleport() {
    const maxSize = gameSize / this.size;
    if (this.x < 0) {
      this.x = gameSize / this.size;
    } else if (this.x > maxSize) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = gameSize / this.size;
    } else if (this.y > maxSize) {
      this.y = 0;
    }
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}
