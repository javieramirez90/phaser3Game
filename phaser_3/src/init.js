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
        // y: 500
      }
    }
  }
}

let game  = new Phaser.Game(config);

function preload() {
  //Aquí suelen cargarse los recursos antes de crearlas
  this.load.image("birdy", "../assets/bird.png");
}

function create() {
  this.birdy = this.physics.add.image(100, 50, "birdy");
  
  //This is the first way to move your character
  // this.input.keyboard.on("keydown_RIGHT", () => {
  //   this.birdy.setAcceleration(100, 0);
  // })

  // this.input.keyboard.on("keyup_RIGHT", () => {
  //   this.birdy.setAcceleration(0, 0);
  //   this.birdy.setVelocity(0);
  // })
  
  // 2nd. This is another way and is related to the method in the update function
  // this.cursor = this.input.keyboard.createCursorKeys();
  // console.log(this.cursor);

  //3rd. Here we are importing a json with the keys
  this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
}

function update(time, delta) {

  //2nd.
  // if(this.cursor.right.isDown){
  //   this.birdy.x++;
  // } else if(this.cursor.left.isDown){
  //   this.birdy.x--;
  // }
  //3rd
  if(this.right.isDown){
    this.birdy.x++;
  } else if(this.left.isDown){
    this.birdy.x--;
  }
}