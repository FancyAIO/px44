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
        this.load.image('background', 'img/bossbackground1.JPG');
        this.load.image('boss', 'img/Eckerle Sprite.png');
        //this.load.image('player', 'img/pipo-nekonin001.png');
        this.load.image('block', 'img/block.png');
        this.load.image('bean', 'img/bean bullet.png')
        this.load.spritesheet('player', 'img/garflief.JPG', {

            frameWidth: 120,

            frameHeight: 190,

        });
        //this.load.spritesheet('player', 'img/pipo-nekonin001.png', {

            //frameWidth: 32,

            //frameHeight: 32

        //});
    }


    create() {

       // background
       let bg = this.add.sprite(0, 0, 'background');

       // change origin to the top-left of the sprite
       bg.setOrigin(0, 0);

       this.power=0;

         //define our objects
         let player = this.physics.add.sprite(this.sys.game.config.height/ 700, 775, "player");
         this.player = player
         //set the gravity
         player.setGravityY(9999);
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
         this.input.on('pointerdown', this.startJump, this);
         this.input.on('pointerup', this.endJump, this);

       // scale down
       this.player.setScale(0.4);
       
        this.enemies = this.add.group({
            key: 'boss',
            repeat: 0,
            setXY: {
                x: 100,
                y: 815,
                stepX: 80,
                stepY: 20
            }
        });
    
        // scale enemies
        Phaser.Actions.ScaleXY(this.enemies.getChildren(), 2, 2);
    
       // set speeds
       Phaser.Actions.Call(this.enemies.getChildren(), function (enemy) {
        enemy.speed = Math.random() * 2 + 1;
    }, this);

    // player is alive
    this.isPlayerAlive = true;

    // reset camera effects
    this.cameras.main.resetFX();

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

    this.player.setCollideWorldBounds(true);
    //this.player.setBounce(1, 1);
    }
    
    update() {

        this.player.body.setVelocityX(0);
        this.player.body.setVelocityY(0);

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-350);
        }
        if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(350);
        }
        if (this.cursors.space.isDown) {
            this.player.body.setVelocityY(-350); //temporary
        }
        //if (this.cursors.up.isDown) {
            //this.player.body.setVelocityY(-350);
        //}
        //if (this.cursors.down.isDown) {
            //this.player.body.setVelocityY(350);
        //}

        // only if the player is alive
        if (!this.isPlayerAlive) {
            return;
        }

        // check for active input
        // if (this.input.activePointer.isDown) {

        //     // player walks
        //     this.player.x += this.playerSpeed;
        // }

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
    startJump() {
        this.timer = this.time.addEvent({
            delay: 100,
            callback: this.tick,
            callbackScope: this,
            loop: true
        });
    // this.player.setVelocityY(-100);
}
    endJump() {
        this.timer.remove();
        this.player.setVelocityY(-this.power * 100);
        this.power = 0;
}
    tick() {
        if (this.power < 50000) {
            this.power += 100;
            console.log(this.power);
        }
}
}

// our game's configuration
let config = {
    type: Phaser.AUTO, //Phaser will decide how to render our game (WebGL or Canvas)
    width: 1800, // game width
    height: 900, // game height
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