class Bullets extends Phaser.Physics.Arcade.Group
{
    constructor (scene)
    {
        super(scene.physics.world);

        this.createMultiple({
            frameQuantity: 5,
            key: 'Bullets',
            active: false,
            visible: false,
            classType: Bullets
        });


    }

    fireBullet (x, y)
    {
        let bullets = this.getFirstDead(false);

        if (bullets)
        {
            bullets.fire(x, y);
        }
    }
}

class beanScene extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.bullets;
        this.ship;
    }

    preload ()
    {
        this.load.image('bullet', 'img/projectiles/bean.png');
        this.load.image('ship', 'img/eckerle/eckerleSprite.png');
    }

    create ()
    {
        this.bullets = new Bullets(this);

        this.ship = this.add.image(400, 500, 'ship');

        this.input.on('pointermove', (pointer) => {

            this.ship.x = pointer.x;

        });
        
    }
    update(){
        var timer = beanScene.time.addEvent({ delay: 500, callback: fireBullet, args: [], callbackScope: this, loop: true });

        this.input.on('pointerdown', (pointer) => {

            this.bullets.fireBullet(this.ship.x, this.ship.y);

        });

    }

}

const config = {
    type: Phaser.AUTO,
    width: 1350,
    height: 750,
    scene: beanScene,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    }
    
};

let game = new Phaser.Game(config);