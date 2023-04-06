function Electrodevice(power){
    this.power = power;
    this.isPoweredUp = false;
}

Electrodevice.prototype.setPoweredUp = function (powerUp){
    this.isPoweredUp = powerUp
}

Electrodevice.prototype.printOwnProperties = function () {
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            console.log(key + ": " + this[key]);
        }
    }
}


function Lamp(lumen=1000){
    this.setLumen(lumen)
}

Lamp.prototype = new Electrodevice(20)

Lamp.prototype.setLumen = function(lumen=1000){
    this.lumen = lumen
    this.power = lumen / 50 //ToDo формула по пересчету лм в вт
}


function Computer(power=500){
    this.power = power
}

Computer.prototype = new Electrodevice(0)


const electrodevice = new Electrodevice(100)
console.log(electrodevice.isPoweredUp)
electrodevice.setPoweredUp(true)
console.log(electrodevice.isPoweredUp)
electrodevice.printOwnProperties()

const lamp20 = new Lamp()
lamp20.printOwnProperties()

const lamp100 = new Lamp(5000)
lamp100.printOwnProperties()

const comp = new Computer()
comp.printOwnProperties()
comp.setPoweredUp(true)
comp.printOwnProperties()