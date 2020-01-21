
class WebStorage { // web local storage class
    constructor() {
        this.name = 'MapleStoryModelGame';
        this.self = window.localStorage;
    }
    create() {
        // console.log('storage this:', this.self);
    }
    setItem(_value) {
        this.self.setItem(this.name, _value);
    }
    getItem() {
        let tmpValue = this.self.getItem(this.name);
        return (tmpValue == null) ? 0 : tmpValue;
    }
}
