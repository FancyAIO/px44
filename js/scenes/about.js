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

class aboutScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'aboutScene',
            active: false
        });
    
        this.cursor = new Phaser.Math.Vector2();


}
preload() {
    this.load.image('background', 'img/Overworld/overworldBackground.PNG');
  }
create(){
    let bg = this.add.sprite(0, 0, 'background');
     bg.setOrigin(0, 0);
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
  forwardslashKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.FORWARD_SLASH);
  minusKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.MINUS);
  periodKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PERIOD);
  plusKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PLUS);
  quotesKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.QUOTES);
  tabKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TAB);

}
update(){
    if (oKey.isDown && !this.atMenu) {
        this.scene.start("overworldScene")
    }
    this.add.rectangle(679,365, 1300, 260,0x00ff00).setStrokeStyle(4, 0x000000);
    this.add.text(50,250, 'Welcome to Codename: PX44. In this game you are a student at Holy Ghost Prep. ',{ font: "35px Arial", fill: "#000000" });
    this.add.text(50,300, 'Your goal is to go through each year and gradute. However, ',{ font: "35px Arial", fill: "#000000" });
    this.add.text(50,350, ' the teachers are trying to stop you. Can you make it to the end and recieve',{ font: "35px Arial", fill: "#000000" });
    this.add.text(50,400, ' your diploma? Or will you end up at the little people school?',{ font: "35px Arial", fill: "#000000" });
    this.add.text(50,450, ' Press O to return to the overworld',{ font: "35px Arial", fill: "#000000" });

}
}