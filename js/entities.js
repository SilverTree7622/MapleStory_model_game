
class Entity {
    constructor() {
        this.self = undefined;
        this.hp = 0;
        this.autoHp = 0; // + per 5 sec
        this.mp = 0;
        this.autoMp = 0; // + per 5 sec
        this.dmg = 0;
        this.isDeath = false;
        this.isSuperMan = false;
        this.direction = 1; // 0: left, 1: right
        this.texture = undefined;
        this.texturesStatus = {
            idle: 'none',
            move: 'blue',
            gotHit: 'purple',
            attack: 'red'
        };
    }
}

// control player
class Player extends Entity { // control player
    constructor() {
        super();
        this.hp = 100;
        this.autoHp = 1;
        this.mp = 100;
        this.autoMp = 2;
        this.dmg = 10;
        this.cursors = undefined;
        this.whichOneFirst = 0; // 0: left, 1: right
        this.attackCollider = undefined;
    }
    create(_scene, _texture) {
        this.self = _scene.physics.add.image(400, 0, _texture);
        this.self.setScale(2);
        this.self.setCollideWorldBounds(true);
        this.attackCollider = _scene.physics.add.image(0, 0, _texture);
        this.attackCollider.body.allowGravity = false;
        this.cursors = _scene.input.keyboard.createCursorKeys();
    }
    initAllVisible() {

    }
    update(_time, _delta) {
        // movement control
        if (this.cursors.left.isDown && this.cursors.right.isDown) {
            (this.whichOneFirst === 0) ? this.updateMovement(1, _delta) : this.updateMovement(0, _delta);
        }
        else if (this.cursors.left.isDown || this.cursors.right.isDown) {
            if (this.cursors.left.isDown) {
                this.updateMovement(0, _delta, 0);
            }
            else if (this.cursors.right.isDown) {
                this.updateMovement(1, _delta, 1);
            }
        }
        else {
            this.updateMovement(3, _delta);
        }

        // player jump detection
        if (this.cursors.up.isDown && this.self.body.touching.down) {
            this.updateMovement(2, _delta);
        }
    }
    updateMovement(_firstDirection, _delta, _direct) {
        if (_direct !== undefined) {
            this.whichOneFirst = _direct;
        }
        switch(_firstDirection) {
            case 0: // left
                // this.self.setVelocityX(-20 * _delta);
                if (this.self.body.x <= 0) {
                    this.self.body.x = 0;
                }
                else {
                    this.self.body.x = this.self.body.x + _delta * (-0.5);
                }
                break;
            case 1: // right
                // this.self.setVelocityX(20 * _delta);
                if (this.self.body.x + this.self.body.width >= 800) {
                    this.self.body.x = 800 - this.self.body.width;
                }
                else {
                    this.self.body.x = this.self.body.x + _delta * (0.5);
                }
                break;
            case 2: // jump
                this.self.setVelocityY(-600);
                break;
            case 3: // idle
                // this.self.setVelocityX(0);
                break;
            default:
                console.log(_firstDirection, '<= this is not on the options');
                break;
        }
        this.followMovement();
    }
    followMovement() {
        this.attackCollider.y = this.self.y;
        if (this.whichOneFirst === 0) {
            this.attackCollider.x = this.self.x - 50;
        }
        else {
            this.attackCollider.x = this.self.x + 50;
        }
    }
    attack() {

    }
}
// basic monster & properties
class Monster extends Entity {
    constructor() {
        super();
    }
    create() {

    }
    initAllVisible(_bool) {

    }
    update() {

    }
    
}
// monsters manager
class MonsterManager {
    constructor() {
        this.types = {};
        this.types.basic = undefined;
        this.types.boss = undefined;
    }
    create(_scene, _texture) {
        // this.types.basic = 
    }
    initAllVisible(_bool) {

    }
    update() {

    }
}
