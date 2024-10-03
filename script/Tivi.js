class Tivi {
    channel; volume

    constructor(channel, volume) {
        this.status = false;
        this.channel = channel;
        this.volume = volume;
    }

    getStatus() {
        if (this.status === true) {
            console.log(`Tivi đang bật`)
            return true;
        } else {
            console.log(`Tivi đang tắt`)
            return false;
        }
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
    getChannel() {
        return this.channel;
    }
    getVolume() {
        return this.volume;
    }
    setChannel(channel) {
        this.channel = channel;
    }
    setVolume(volume) {
        this.volume = volume;
    }
    increaseVolume() {
        return this.volume++;
    }
    decreaseVolume() {
        return this.volume--;
    }
}

let samsung = new Tivi(1,5);