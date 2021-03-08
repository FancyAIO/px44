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

        this.setVelocityY(-300);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if (this.y <= -32)
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
        super(scene.Physics.world);

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
        // var timer = beanScene.time.addEvent({ delay: 500, callback: fireBullet, args: [], callbackScope: this, loop: true });

        this.input.on('pointerdown', (pointer) => {

            this.bullets.fireBullet(this.ship.x, this.ship.y);

        });

    }

}

let config = {
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