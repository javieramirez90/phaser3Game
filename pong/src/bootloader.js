class Bootloader extends Phaser.Scene {
  constructor() {
    super({key: "Bootloader"});
  }
  preload(){
    console.log("Se ha cargado la escena del bootloader");
  }
}

export default Bootloader;