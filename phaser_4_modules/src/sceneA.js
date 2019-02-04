import SceneC from './sceneC.js';
export default class SceneA extends Phaser.Scene {
    constructor() {
        super({key: "SceneA"});
    }
    preload() {

    } 
    create() {
        let graphics = this.add.graphics();

        graphics.fillStyle(0xff3300, 1);

        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(100, 100, 100, 100);

        this.add.text(120, 110, "A", { font: "96px Courier", fill: "#000000" });

        this.scene.add("SceneC", new SceneC);
        this.scene.moveAbove("SceneB", "SceneC");
        /*
            this.scene.bringToTop(); *Encima de todo*
            this.scene.sendToBack(); *Atrás de todo*
            this.scene.moveUp(); *Un paso arriba*
            this.scene.moveDown(); *Un paso atrás*
            this.scene.moveAbove(); *Encima de una escena indicada*
            this.scene.moveBelow(); *Abajo de una escena indicada*
        */

    }
    update(time, delta) {
        
    }
}
