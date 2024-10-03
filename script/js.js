samsung.turnOn();
console.log(samsung.getStatus());
samsung.setChannel(7);
console.log(`Channel ${samsung.getChannel()}`);
remote1.setChannel(3);
console.log(`Channel ${samsung.getChannel()}`);
samsung.increaseVolume();
samsung.increaseVolume();
console.log(`Volume ${samsung.getVolume()}`);
remote1.turnOff()
console.log(samsung.getStatus());