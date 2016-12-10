function BowlingGame() {
  this.currentTotal = 0
}

BowlingGame.prototype.moveToNextFrame = function() {
  if (this.currentFrame > 10) {
    throw new Error("Game over!")
  }
  this.currentFrame++;
}

BowlingGame.prototype.resetGame = function() {
  this.currentFrame = 1
}
