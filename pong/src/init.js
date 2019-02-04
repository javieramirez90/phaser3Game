import Bootloader from './bootloader.js';

const config  = {
  width: 640,
  height: 400,
  parent: "container",
  physics: {
    default: "arcade"
  },
  scene: [
    Bootloader
  ]
}

new Phaser.Game(config);