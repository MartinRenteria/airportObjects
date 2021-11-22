const Dog = require("./dog")

class Husky extends Dog {
    constructor(name) {
        super(name) 
            this.breed = 'Husky'
    }
}

let huskyChild = new Husky()
console.log(huskyChild.speak())

module.exports = Husky