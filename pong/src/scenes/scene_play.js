class Scene_play extends Phaser.Scene {
  constructor() {
    super({key: "Scene_play"});
  }
  create() {
    let center_width = this.sys.game.config.width / 2;
    let center_height = this.sys.game.config.height / 2;
    
    //Separator
    this.add.image(center_width, center_height, "separator");

    //Palletes
    this.left_pallete = this.add.image(5, center_height, "left_pallete");
    this.right_pallete = this.add.image(this.sys.game.config.width - 5, center_height, "right_pallete");

    //Ball

    this.ball =  this.physics.add.image(center_width, center_height, "ball");

    this.ball.setVelocityX(-180);
  }
}

export default Scene_play;