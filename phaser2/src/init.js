const config = {
  width: 320 * 2,
  height: 180 * 2,
  parent: "container",
  type: Phaser.AUTO,
  scene: {
    //funciones
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 500
      }
    }
  }
}

let game  = new Phaser.Game(config);

function preload() {
  //Aquí suelen cargarse los recursos antes de crearlas
  this.load.image("birdy", "../assets/bird.png")

}

function create() {
  this.birdy = this.physics.add.image(80, 100, "birdy");
  // this.birdy.setScale(2);
  // this.birdy.flipX = true;
  // this.birdy.setAngle(45);
  this.birdy.setOrigin(0.5);
  //Physics
  this.birdy.setCollideWorldBounds(true);
  this.birdy.setBounce(.28);
  this.birdy.setVelocity(50, 0);
}

function update(time, delta) {
  // this.birdy.y++;
  
  // console.log(time);
  // console.log(delta);

}