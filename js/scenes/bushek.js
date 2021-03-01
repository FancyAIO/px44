class bushekScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'bushekScene',
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
      this.load.image('bushek', 'img/Bushek Sprite.PNG')
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
      this.bushek = this.physics.add.sprite(400, this.sys.game.config.height / 2, 'bushek',);
      this.eck.setScale(2);
      this.bushek.setScale(2);
    

    // player is alive
    this.isPlayerAlive = true;
    // reset camera effects
    this.cameras.main.resetFX();
    // sets up keyboard binds
    this.cursors = this.input.keyboard.createCursorKeys();
    var spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    var oneKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
    var twoKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
    var threeKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
    var fourKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
    var fiveKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
    var sixKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);
    var sevenKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);
    var eightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT);
    var nineKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE);
    var zeroKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);
    var aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    var bKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    var cKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    var dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    var eKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    var fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    var gKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
    var hKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
    var iKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
    var jKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
    var kKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
    var lKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
    var mKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    var nKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
    var oKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
    var pKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    var qKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    var rKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    var sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    var tKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    var uKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
    var vKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
    var wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    var xKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    var yKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
    var zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    var altKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ALT);
    var backslashKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACK_SLASH);
    var backspaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
    var backtickKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKTICK);
    var openbracketKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.OPEN_BRACKET);
    var closedbracketKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CLOSED_BRACKET);
    var capslockKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CAPS_LOCK);
    var semicolonKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEMICOLON);
    var commaKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.COMMA);
    var ctrlKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);
    var deleteKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DELETE);
    var enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    var escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    var f1Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F1);
    var f2Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F2);
    var f3Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F3);
    var f4Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F4);
    var f5Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F5);
    var f6Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F6);
    var f7Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F7);
    var f8Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F8);
    var f9Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F9);
    var f10Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F10);
    var f11Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F11);
    var f12Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F12);
    var forwardslashKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FORWARD_SLASH);
    var minusKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.MINUS);
    var periodKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PERIOD);
    var plusKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PLUS);
    var quotesKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.QUOTES);
    var tabKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TAB);
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
     if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.bushek.getBounds())) {
        this.gameOver();
        this.scene.start("petcaughScene");
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
    scene: bushekScene, // our newly created scene
    parent: 'main-game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false
        }
    }
    };
    
    // create the game, and pass it the configuration
    let game= new Phaser.Game(config);
  