class gameScene extends Phaser.Scene {
  constructor() {
      super({
          key: 'gameScene',
          active: true
      });
      this.cursor = new Phaser.Math.Vector2();
      this.playerSpeed = 0.1;
      this.enemyMaxY = 1200;
      this.enemyMinY = 20;
  }
  
  preload() {
      this.load.image('background', 'img/Eck background.jpg');
      this.load.image('boss', 'img/Eckerle Sprite.PNG');
      this.load.spritesheet('player', 'img/garflief.JPG', {

          frameWidth: 120,

          frameHeight: 190,

      });
  }

  create() {
     // background
     let bg = this.add.sprite(0, 0, 'background');
     bg.setOrigin(0, 0);
    // player
     this.player = this.physics.add.sprite(40, this.sys.game.config.height / 2, 'player',);
     // scale down player
     this.player.setScale(1);
     // enemies
      this.enemies = this.add.group({
          key: 'boss',
          repeat: 0,
          setXY: {
              x: 110,
              y: 100,
              stepX: 80,
              stepY: 20
          }
      });
      // scale enemies
      Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.2, -0.2);
     // set speeds
     Phaser.Actions.Call(this.enemies.getChildren(), function (enemy) {
      enemy.speed = Math.random() * 2 + 1;
  }, this);
  // player is alive
  this.isPlayerAlive = true;
  // reset camera effects
  this.cameras.main.resetFX();
  // sets up keyboard binds
  this.cursors = this.input.keyboard.createCursorKeys();
  // setting world bounds function
  this.player.setCollideWorldBounds(true);
  }
  
  update() {
    // setting velocity variables
      this.player.body.setVelocityX(0);
      this.player.body.setVelocityY(0);
    // keybinds' actions
      if (this.cursors.left.isDown) {
          this.player.body.setVelocityX(-350);
      }
      if (this.cursors.right.isDown) {
          this.player.body.setVelocityX(350);
      }
      if (this.cursors.up.isDown) {
          this.player.body.setVelocityY(-350);
      }
      if (this.cursors.down.isDown) {
          this.player.body.setVelocityY(350);
      }
      // only if the player is alive
      if (!this.isPlayerAlive) {
          return;
      }
      // check for active input
      if (this.input.activePointer.isDown) {
          // player walks
          this.player.x += this.playerSpeed;
      }
      // enemy movement
      let enemies = this.enemies.getChildren();
      let numEnemies = enemies.length;
      for (let i = 0; i < numEnemies; i++) {
          // move enemies
          enemies[i].x += enemies[i].speed;
          // reverse movement if reached the edges
          if (enemies[i].x >= this.enemyMaxY && enemies[i].speed > 0) {
              enemies[i].speed *= -1;
          } else if (enemies[i].x <= this.enemyMinY && enemies[i].speed < 0) {
              enemies[i].speed *= -1;
          }
          // enemy collision
          if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), enemies[i].getBounds())) {
              this.gameOver();
              break;
          }
      }
}

  gameOver() {
    this.player.x = 40;
    this.player.y = this.sys.game.config.height / 2;
  }
}

// our game's configuration
let config = {
  type: Phaser.AUTO, //Phaser will decide how to render our game (WebGL or Canvas)
  width: 1350, // game width
  height: 750, // game height
  scene: gameScene, // our newly created scene
  parent: 'main-game',
  physics: {
      default: 'arcade',
      arcade: {
          gravity: false
      }
  }
  };
  
  // create the game, and pass it the configuration
  let game = new Phaser.Game(config);
