
// UI about all the player input & All skill thumnail arrangement
class UIManager {
    constructor(_storage) {
        this.playerPad = this.initPlayerPad();
        this.attackKey = this.initAttackKey();
        this.skillsTab = this.initSkillsTab();
        this.info = this.initInfo(_storage);
        this.etc = this.initEtc();
    }
    create(_scene, _texture, _cursors, _target) {
        this.createPlayerPad(_scene, _texture.arrowSkill);
        this.createAttackKey(_scene, _texture.attack);
        this.createSkillsTab(_scene);
        this.createInfo(_scene);
        this.createMultiPointer(_scene);
        this.createAllInteractive(_scene, _cursors, _target);
    }
    update(_time, _delta) {
        this.updateInfoScore();
    }
    
    // init
    initEtc() {
        let tmpEO = {};
        tmpEO.isPointerDown = false;
        tmpEO.isAttackDone = true;
        return tmpEO;
    }
    initPlayerPad() { // movement pad
        let tmpPP = {};
        tmpPP.up = undefined;
        tmpPP.left = undefined;
        tmpPP.right = undefined;
        tmpPP.con = undefined;
        tmpPP.pos = {
            x: 150, y: 420
        };
        return tmpPP;
    }
    initAttackKey() {
        let tmpAK = {};
        tmpAK.texture = undefined;
        tmpAK.con = undefined;
        tmpAK.pos = {
            x: 700, y: 470
        };
        return tmpAK;
    }
    initSkillsTab() {

    }
    initInfo(_storage) {
        let tmpI = {};
        tmpI.score = {
            runtimeTxt: 'SCORE : ',
            runtime: 0,
            runtimeStr: undefined,
            bestTxt: 'BEST : ',
            best: _storage == null ? 0 : _storage,
            bestStr: undefined
        };
        // fontFamily, font color, fontSize, border color, border color
        tmpI.fontProperties = ['Arial', '#ffffff', 30, '#000000', 3];
        tmpI.con = undefined;
        return tmpI;
    }
    // create
    createPlayerPad(_scene, _texture) {
        let tmpScale = 1.2;
        let tmpPosValue = 40 * tmpScale;
        let tmpAlphaValue = 0.3;
        this.playerPad.up = _scene.add.image(0, 0, _texture);
        this.playerPad.up.setAlpha(tmpAlphaValue);
        this.playerPad.up.setAngle(270);
        this.playerPad.up.setScale(tmpScale);
        this.playerPad.up.setInteractive();
        this.playerPad.left = _scene.add.image(-tmpPosValue, tmpPosValue, _texture);
        this.playerPad.left.setAlpha(tmpAlphaValue);
        this.playerPad.left.setAngle(180);
        this.playerPad.left.setScale(tmpScale);
        this.playerPad.left.setInteractive();
        this.playerPad.right = _scene.add.image(tmpPosValue, tmpPosValue, _texture);
        this.playerPad.right.setAlpha(tmpAlphaValue);
        this.playerPad.right.setScale(tmpScale);
        this.playerPad.right.setInteractive();

        this.playerPad.con = _scene.add.container();
        this.playerPad.con.add([
            this.playerPad.up, this.playerPad.left, this.playerPad.right
        ]);
        this.playerPad.con.setPosition(this.playerPad.pos.x, this.playerPad.pos.y);
    }
    createAttackKey(_scene, _texture) {
        this.attackKey.texture = _scene.add.image(0, 0, _texture);
        this.attackKey.texture.setAlpha(0.3);
        this.attackKey.texture.setScale(4);
        this.attackKey.texture.setInteractive();
        this.attackKey.con = _scene.add.container();
        this.attackKey.con.add(this.attackKey.texture);
        this.attackKey.con.setPosition(this.attackKey.pos.x, this.attackKey.pos.y);
    }
    createSkillsTab() {

    }
    createInfo(_scene) {
        this.createInfoScore(_scene);
        this.info.con = _scene.add.container();
        this.info.con.add([
            this.info.score.runtimeStr, this.info.score.bestStr
        ]);
        this.info.con.setPosition(10, 10);
    }
    createMultiPointer(_scene) {
        _scene.input.addPointer(1);
    }
    createInfoScore(_scene) {
        this.info.score.runtimeStr = _scene.add.text(0, 0, this.info.score.runtimeTxt + this.info.score.runtime);
        this.info.score.runtimeStr.setFontFamily(this.info.fontProperties[0]);
        this.info.score.runtimeStr.setColor(this.info.fontProperties[1]);
        this.info.score.runtimeStr.setFontSize(this.info.fontProperties[2]);
        this.info.score.runtimeStr.setStroke(this.info.fontProperties[3], this.info.fontProperties[4]);
        this.info.score.bestStr = _scene.add.text(0, 35, this.info.score.bestTxt + this.info.score.best);
        this.info.score.bestStr.setFontFamily(this.info.fontProperties[0]);
        this.info.score.bestStr.setColor(this.info.fontProperties[1]);
        this.info.score.bestStr.setFontSize(this.info.fontProperties[2]);
        this.info.score.bestStr.setStroke(this.info.fontProperties[3], this.info.fontProperties[4]);
    }
    createAllInteractive(_scene, _cursors, _target) { // create all set interactive
        // scene pointer checker
        _scene.input.on('pointerdown', () => {
            this.etc.isPointerDown = true;
        });
        _scene.input.on('pointerup', () => {
            this.etc.isPointerDown = false;
        });
        
        // playerpad
        // up
        this.playerPad.up.on('pointerover', () => {
            if (this.etc.isPointerDown) {
                _cursors.up.isDown = true;
            }
        });
        this.playerPad.up.on('pointerdown', () => {
            _cursors.up.isDown = true;
        });
        this.playerPad.up.on('pointerup', () => {
            _cursors.up.isDown = false;
        });
        this.playerPad.up.on('pointerout', () => {
            _cursors.up.isDown = false;
        });
        // left
        this.playerPad.left.on('pointerover', () => {
            if (this.etc.isPointerDown) {
                _cursors.left.isDown = true;
            }
        });
        this.playerPad.left.on('pointerdown', () => {
            _cursors.left.isDown = true;
        });
        this.playerPad.left.on('pointerup', () => {
            _cursors.left.isDown = false;
        });
        this.playerPad.left.on('pointerout', () => {
            _cursors.left.isDown = false;
        });
        // right
        this.playerPad.right.on('pointerover', () => {
            if (this.etc.isPointerDown) {
                _cursors.right.isDown = true;
            }
        });
        this.playerPad.right.on('pointerdown', () => {
            _cursors.right.isDown = true;
        });
        this.playerPad.right.on('pointerup', () => {
            _cursors.right.isDown = false;
        });
        this.playerPad.right.on('pointerout', () => {
            _cursors.right.isDown = false;
        });

        // attack pad key
        this.attackKey.texture.on('pointerdown', () => {
            this.attackEvent(_scene, _target);
        });
        _scene.input.keyboard.on('keydown-Z', () => {
            this.attackEvent(_scene, _target);
        });
        
    }
    attackEvent(_scene, _target) {
        if (this.etc.isAttackDone) {
            var tmpTw = _scene.tweens.addCounter({
                from: 0, to: 360,
                duration: 360, ease: 'Linear',
                onStart: () => {
                    this.etc.isAttackDone = false;
                },
                onUpdate: () => {
                    _target.setAngle(tmpTw.getValue());
                },
                onComplete: () => {
                    _target.setAngle(0);
                    this.etc.isAttackDone = true;
                }
            });
        }
    }
    updateInfoScore() {
        // update best score via now score
        if (this.info.score.runtime >= this.info.score.best) {
            this.info.score.best = this.info.score.runtime;
            this.info.score.bestStr.setText(this.info.score.bestTxt + this.info.score.best);
        }
    }
}