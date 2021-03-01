
IN CREATE()
leftKey =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
 


IN UPDATE()
create the game, and pass it the configuration
  check for active input
(leftKey.isDown && this.player.x > 15) {
    player walks
    this.player.x -= this.playerSpeed;
  }

  if (rightKey.isDown && this.player.x < 590) {
    player walks
    this.player.x += this.playerSpeed;
  }

  if (upKey.isDown && this.player.y > 80) {
    player walks
    this.player.y -= this.playerSpeed;
  }

  if (downKey.isDown && this.player.y < 280) {
    player walks
    this.player.y += this.playerSpeed;
  }
