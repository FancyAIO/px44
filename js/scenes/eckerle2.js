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
         player.setGravityY(300);
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
                x: 110,
                y: 700,
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
        if (this.power < 5) {
            this.power += .1;
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