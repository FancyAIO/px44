class Bullet extends Phaser.Physics.Arcade.Sprite
{
    constructor (scene, x, y)
    {
        super(scene, x, y, 'bullet');
    }

    fire (x, y)
    {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        this.setVelocityX(-300);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if (this.x <= -32)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}

class Bullets extends Phaser.Physics.Arcade.Group
{
    constructor (scene)
    {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 5,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        });
    }

    fireBullet (x, y)
    {
        let bullet = this.getFirstDead(false);

        if (bullet)
        {
            bullet.fire(x, y);
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
        this.timer;
    }

    preload ()
    {
        this.load.image('bullet', 'img/projectiles/bean.png');
        this.load.image('ship', 'img/eckerle/eckerleSprite.png');
    }

    create ()
    {
        this.power = 0
        
        this.bullets = new Bullets(this);

        this.ship = this.add.image(400, 500, 'ship');

        this.input.on('pointermove', (pointer) => {

            this.ship.x = pointer.x;

        });
        /*
            this.timer = this.time.addEvent({
                delay: 50,
                callback: this.bullets.fireBullet(this.ship.x, this.ship.y),
                callbackScope: this,
                loop: true
            });
        */
        this.input.on('pointerdown', (pointer) => {
            this.bullets.fireBullet(this.ship.x, this.ship.y);
        });

        };
    }



const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'main-game',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scene: beanScene
};

let game = new Phaser.Game(config);
