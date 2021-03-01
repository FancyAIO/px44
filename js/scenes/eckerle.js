class eckerleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'eckerleScene',
            active: true
        });
        this.cursor = new Phaser.Math.Vector2();
        this.playerSpeed = 0.1;
        this.enemyMaxY = 1200;
        this.enemyMinY = 20;
    }
    
    preload() {
        this.load.image('background', 'img/bossbackground1.JPG');
      this.load.image('eck', 'img/Eckerle Sprite.PNG');
      //this.load.image('bushek', 'img/Bushek Sprite.PNG')
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
     this.player.setScale(0.5);
     // enemies
      this.eck = this.physics.add.sprite(200, this.sys.game.config.height / 2, 'eck',);
      //this.bushek = this.physics.add.sprite(400, this.sys.game.config.height / 2, 'bushek',);
      this.eck.setScale(2);
      //this.bushek.setScale(2);

      this.enemies = this.add.group({
        key: 'eck',
        repeat: 0,
        setXY: {
            x: 110,
            y: 700,
            stepX: 80,
            stepY: 20
        }
    });
    
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
          //eck collision
      if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.eck.getBounds())) {
        this.gameOver();
        this.scene.start("coophestonScene");
      }
     //bushek collision
     //if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.bushek.getBounds())) {
        //this.gameOver();
        //this.scene.start("petcaughScene");
      //}
    }
  }
   
    for (let i = 0; i < numEnemies; i++) {

      // move enemies
      enemies[i].x += enemies[i].speed;

      // reverse movement if reached the edges
      if (enemies[i].x >= this.enemyMaxY && enemies[i].speed > 0) {
          enemies[i].speed *= -1;
      } else if (enemies[i].x <= this.enemyMinY && enemies[i].speed < 0) {
          enemies[i].speed *= -1;
      }

  }
  
  // our game's configuration
  let config = {
    type: Phaser.AUTO, //Phaser will decide how to render our game (WebGL or Canvas)
    width: 1350, // game width
    height: 750, // game height
    scene: eckerleScene, // our newly created scene
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
  