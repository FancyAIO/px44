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
var text1;
var beansFired;
beansFired = 0;
var totalDeaths;
totalDeaths = 0;

class gameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'coophestonScene',
            active: true
        });
    
        this.cursor = new Phaser.Math.Vector2();
    
        this.playerSpeed = 0.1;
        this.enemyMaxY = 1200;
        this.enemyMinY = 20;
        this.timer;
        this.playerHealth = 100;
        this.healthBarX = 225;
    }
    
    preload() {
        this.load.image('coophestonBackground', 'img/coopheston/CoopandHeston background.webp');
        this.load.image('coophestonBoss', 'img/eckerle/eckerleSprite.png');
        //this.load.image('player', 'img/pipo-nekonin001.png');
        this.load.image('block', 'img/other/block.png');
        this.load.image('bean', 'img/projectiles/bean bullet.png')
        this.load.spritesheet('player', 'img/other/garflief.JPG', {
            frameWidth: 120,
            frameHeight: 190,
        });
    }

    create() {
       // background
       let bg = this.add.sprite(0, 0, 'coophestonBackground');
       // change origin to the top-left of the sprite
       bg.setOrigin(0, 0);
       bg.setScale(4.0)

       this.power=0;

         //define our objects
         let player = this.physics.add.sprite(this.sys.game.config.height/ 700, 775, "player");
         this.player = player
         //set the gravity
         player.setGravityY(5000);
         player.setOrigin(100, 100);
         //place the ground
         let groundX = this.sys.game.config.width / 2;
         let groundY = this.sys.game.config.height * .99;
         let ground = this.physics.add.sprite(groundX, groundY, "block");
         //size the ground
         ground.displayWidth = this.sys.game.config.width * 1.1;
         //make the ground stay in place
         ground.setImmovable();
         //add the colliders
         this.physics.add.collider(player, ground);
       // scale down
       this.player.setScale(0.4);
        this.enemies = this.add.group({
            key: 'coophestonBoss',
            repeat: 0,
            setXY: {
                x: 500,
                y: 600,
                stepX: 80,
                stepY: 20
            }
        });
    
        // scale enemies
        Phaser.Actions.ScaleXY(this.enemies.getChildren(), 0.5, 0.5);
       // set speeds
       Phaser.Actions.Call(this.enemies.getChildren(), function (enemy) {
        enemy.speed = Math.random() * 2 + 1;
    }, this);

    // player is alive
    this.isPlayerAlive = true;

    // reset camera effects
    this.cameras.main.resetFX();

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
    forwardslashKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FORWARD_SLASH);
    minusKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.MINUS);
    periodKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PERIOD);
    plusKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PLUS);
    quotesKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.QUOTES);
    tabKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TAB);

    this.player.setCollideWorldBounds(true);
    this.text1 = this.add.text(10, 10, '', { font: '32px Gotham Bold', fill: '#0' });
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
        }

        if (Phaser.Input.Keyboard.JustUp(spaceKey)) {
            this.endJump();
        }
        if (oKey.isDown && !this.atMenu) {
            this.scene.start("overworldScene")
        }
        if (rKey.isDown && !this.atMenu){
        
            this.text1.setText([
              'DEBUG',
              'x: ' + this.player.x,
              'y: ' + this.player.y,
              'beansFired: ' + 0,
              'totalDeaths:' + 0
          ]); 
          
  
        }
        if (tKey.isDown && !this.atMenu){
          this.text1.setText([''])
        }
        // only if the player is alive
        if (!this.isPlayerAlive) {
            return;
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
                healthBar(this);
                this.gameOver();
                break;
            }
        }
}
    startJump() {
        this.timer = this.time.addEvent({
            delay: 0,
            callback: this.tick,
            callbackScope: this,
            loop: true
        });
}
    endJump() {
        this.timer.remove();
        this.player.setVelocityY(-this.power * 10);
        this.power = 0;
}
    tick() {
        if (this.power < 200) {
            this.power += 200;
        }
}
    gameOver() {  
        this.playerHealth = 100;
        this.healthBarX = 225;
        this.player.x = 100; 
        this.player.y = 100;
        totalDeaths++;      
    }
}



function healthBar(scene) {
    if (scene.playerHealth >= 0) {
        scene.rect = scene.add.rectangle(scene.healthBarX, 75, scene.playerHealth * 4, 65, 0x00ff00).setStrokeStyle(4, 0x000000);
        scene.playerHealth -= 0.5;
        scene.healthBarX -= 1;
    }
}