

// Skill management for player
class SkillManager {
    constructor() {
        this.skills = [];
        this.properties = this.initProperties();
    }
    create(_scene, _texture) {
        // jump skill

        // line strike
        this.createSkill(this.skills, {
            name: 'strike',
            texture: _texture,
            movePos: {
                x: 0, y: 0, durX: 0, durY: 0
            },
            dmgPercent: 4, // dmg*4
            coolTime: 10,
            physicsDuringSkill: true,
            useSkill: function (_player, _tw) {
                console.log('this:', this);
                console.log('_player:', _player);
                console.log('_tw:', _tw);

                
                // _tw.addCounter({
                    
                // });
            }
            
        });

    }
    initAllVisible(_bool) {
        
    }
    update() {

    }

    initProperties() {
        let tmpP = [];
        
        return tmpP;
    }
    createConfig(_list) {
        let tmpObj = {};
        tmpObj.name = _list.shift();
        tmpObj.texture = _list.shift();
        tmpObj.movePos = _list.shift();
        tmpObj.dmgPercent = _list.shift();
        tmpObj.coolTime = _list.shift();
        tmpObj.physicsDuringSkill = _list.shift();
        tmpObj.useSkill = undefined;
        return tmpObj;
    }
    createSkill(_skillList, _config) {
        let tmpSkill = _config;
        _skillList.push(tmpSkill);
    }
    useSkill(_idx, _player, _tw) { // using skill via idx
        this.skills[_idx].useSkill(_player, _tw);
        console.log('this.skiils[_idx]:', this.skiils[_idx]);
    }
}
