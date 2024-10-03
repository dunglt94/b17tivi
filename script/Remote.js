class Remote {
    id; tv;

    constructor(id, tv) {
        this.id = id;
        this.tv = tv;
    }
    turnOn() {
        this.tv.status = true;
    }
    turnOff() {
        this.tv.status = false;
    }
    setChannel(channel) {
        this.tv.channel = channel;
    }
    increaseVolume() {
        return this.tv.volume++;
    }
    decreaseVolume() {
        return this.tv.volume--;
    }
}

let remote1 = new Remote(1, samsung);