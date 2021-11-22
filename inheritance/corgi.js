const Dog = require("./dog")

class Corgi extends Dog {
    constructor(name, color, breed){
        super(name, color, 'Corgi')
        this.color = color
        this.breed = 'Corgi'
        this.legs = 4
    }
}

let corgiChild = new Corgi('bob','black', 4)

console.log(corgiChild.breed)
console.log(corgiChild.name)
console.log(corgiChild.legs)

module.exports = Corgi