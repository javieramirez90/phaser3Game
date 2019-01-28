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
  }
}

let game  = new Phaser.Game(config);

function preload() {
  //Aquí suelen cargarse los recursos antes de crearlas
  this.load.image("", "../s")
}

function create() {
  console.log("Soy create");
}

function update(time, delta) {
  // console.log(time);
  console.log(delta);

}