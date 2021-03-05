var spaceKey;
var aKey;
var bKey;
var cKey;
var dKey;
var eKey;
var fKey;
var gKey;
var hKey;
var iKey;
var jKey;
var kKey;
var lKey;
var mKey;
var nKey;
var oKey;
var pKey;
var qKey;
var rKey;
var sKey;
var tKey;
var uKey;
var vKey;
var wKey;
var xKey;
var yKey;
var zKey;
var zeroKey;
var oneKey;
var twoKey;
var threeKey;
var fourKey;
var fiveKey;
var sixKey;
var sevenKey;
var eightKey;
var nineKey;
var f1Key;
var f2Key;
var f3Key;
var f4Key;
var f5Key;
var f6Key;
var f7Key;
var f8Key;
var f9Key;
var f10Key;
var f11Key;
var f12Key;
var forwardslashKey;
var minusKey;
var periodKey;
var plusKey;
var quotesKey;
var tabKey;
var altKey;
var backslashKey;
var backspaceKey;
var backtickKey;
var openbracketKey;
var closedbracketKey;
var capslockKey;
var semicolonKey;
var commaKey;
var ctrlKey;
var deleteKey;
var enterKey;
var escKey;

class petcaughScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'petcaughScene',
            active: true
        });
        this.cursor = new Phaser.Math.Vector2();
        this.playerSpeed = 0.1;
        this.enemyMaxY = 1200;
        this.enemyMinY = 20;
    }
    
    preload() {
      this.load.image('background', 'img/best/Bestbackground.JPG');
      //this.load.image('eck', 'img/eckerle/Eckerle Sprite.PNG');
      this.load.image('bushek', 'img/best/bestSprite.PNG')
      this.load.spritesheet('player', 'img/other/garflief.JPG', {

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
    spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    oneKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
    twoKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
    threeKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);
    fourKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FOUR);
    fiveKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FIVE);
    sixKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SIX);
    sevenKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEVEN);
    eightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.EIGHT);
    nineKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NINE);
    zeroKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);
    aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    bKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    cKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    eKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    gKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
    hKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
    iKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
    jKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
    kKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
    lKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
    mKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    nKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
    oKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
    pKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    qKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    rKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    tKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    uKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
    vKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
    wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    xKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    yKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
    zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    altKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ALT);
    backslashKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACK_SLASH);
    backspaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
    backtickKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKTICK);
    openbracketKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.OPEN_BRACKET);
    closedbracketKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CLOSED_BRACKET);
    capslockKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CAPS_LOCK);
    semicolonKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SEMICOLON);
    commaKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.COMMA);
    ctrlKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);
    deleteKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DELETE);
    enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    f1Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F1);
    f2Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F2);
    f3Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F3);
    f4Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F4);
    f5Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F5);
    f6Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F6);
    f7Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F7);
    f8Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F8);
    f9Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F9);
    f10Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F10);
    f11Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F11);
    f12Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F12);
    forwardslashKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FORWARD_SLASH);
    minusKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.MINUS);
    periodKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PERIOD);
    plusKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PLUS);
    quotesKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.QUOTES);
    tabKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TAB);

    // setting world bounds function
    this.player.setCollideWorldBounds(true);
    }

    update() {
      if (aKey.isDown) {
        this.player.x -= 10;
    }
    if (this.cursors.left.isDown) {
        this.player.body.x -= 10;
    }
    if (dKey.isDown) {
        this.player.x += 10;
      }
    if (this.cursors.right.isDown) {
        this.player.body.x += 10
    }

    if (Phaser.Input.Keyboard.JustDown(spaceKey) && this.player.y > 8200) {
        this.startJump();
        console.log("jump");
    }

    if (Phaser.Input.Keyboard.JustUp(spaceKey)) {
        this.endJump();
    }
    if (!this.isPlayerAlive) {
      return;
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
    scene: petcaughScene, // our newly created scene
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
  