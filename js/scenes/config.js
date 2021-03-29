let config = {
    type: Phaser.AUTO, //Phaser will decide how to render our game (WebGL or Canvas)
    width: 1350, // game width
    height: 750, // game height
    scene: [overworldScene, bestScene, bushekScene, petcaughScene, eckerleScene, eckerle2Scene, aboutScene], // our newly created scene
    parent: 'main-game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false
        }
    }
    };
    let game = new Phaser.Game(config); 
