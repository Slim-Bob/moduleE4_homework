class Electrodevice {
    constructor(power) {
        this.power = power;
        this.isPoweredUp = false;
    }
    setPoweredUp(powerUp) {
        this.isPoweredUp = powerUp
    }
    printOwnProperties() {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                console.log(key + ": " + this[key]);
            }
        }
    }
}


class Lamp extends Electrodevice {
    constructor(lumen = 1000) {
        super(0)
        this.setLumen(lumen);
    }
    setLumen(lumen = 1000) {
        this.lumen = lumen
        this.power = lumen / 50 //ToDo формула по пересчету лм в вт
    }
}


class Computer extends Electrodevice {
    constructor(power = 500) {
        super(power)
    }
}

// const electrodevice = new Electrodevice(100)
// console.log(electrodevice.isPoweredUp)
// electrodevice.setPoweredUp(true)
// console.log(electrodevice.isPoweredUp)
// electrodevice.printOwnProperties()

// const lamp20 = new Lamp()
// lamp20.printOwnProperties()

// const lamp100 = new Lamp(5000)
// lamp100.printOwnProperties()


const comp = new Computer()
comp.printOwnProperties()
comp.setPoweredUp(true)
comp.printOwnProperties()

