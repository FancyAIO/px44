constructor() {
        super({
            key: 'gameScene',
            active: true
        });

        this.cursor = new Phaser.Math.Vector2();

        this.playerSpeed = 0.1;
        this.enemyMaxY = 280;
        this.enemyMinY = 80;
    }

create() {
       
        this.enemies = this.add.group({
            key: 'teach1',
            repeat: 1,
            setXY: {
                x: 110,
                y: 100,
                stepX: 80,
                stepY: 20
            }
        });

        // scale enemies
        Phaser.Actions.ScaleXY(this.enemies.getChildren(), 0.2, 0.2);

        // set speeds
        Phaser.Actions.Call(this.enemies.getChildren(), function (enemy) {
            enemy.speed = Math.random() * 2 + 1;
        }, this);

        this.player.setCollideWorldBounds(true);
        //this.player.setBounce(1, 1);
    }

 update() {
       
        // enemy movement
        let enemies = this.enemies.getChildren();
        let numEnemies = enemies.length;

        for (let i = 0; i < numEnemies; i++) {

            // move enemies
            enemies[i].y += enemies[i].speed;

            // reverse movement if reached the edges
            if (enemies[i].y >= this.enemyMaxY && enemies[i].speed > 0) {
                enemies[i].speed *= -1;
            } else if (enemies[i].y <= this.enemyMinY && enemies[i].speed < 0) {
                enemies[i].speed *= -1;
            }

            // enemy collision
            if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), enemies[i].getBounds())) {
                this.gameOver();
                break;
            }
        }

    }
    
    // our game's configuration
let config = {
    type: Phaser.AUTO, //Phaser will decide how to render our game (WebGL or Canvas)
    width: 640, // game width
    height: 360, // game height
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
