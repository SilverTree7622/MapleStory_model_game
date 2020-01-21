
// Damage management for monsters
class DamageManager {
    constructor() {

    }
    create() {

    }
    initAllVisible(_bool) {

    }
    update() {

    }
}

class Platform { // platform for entities
    constructor() {
        this.self = []
    }
    // create temp platforms
    create(_scene, _texture) {
        let tmpImg = _scene.physics.add.image(400, 400, _texture);
        tmpImg.setImmovable(true);
        tmpImg.body.allowGravity = false;
        this.self.push(tmpImg);
        let tmpImg2 = _scene.physics.add.image(0, 560, _texture);
        tmpImg2.setImmovable(true);
        tmpImg2.body.allowGravity = false;
        tmpImg2.setOrigin(0, 0.5);
        tmpImg2.setDisplaySize(800, 64);
        this.self.push(tmpImg2);
    }
    initAllVisible(_bool) {

    }
    update() {

    }
}