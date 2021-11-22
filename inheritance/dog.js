const Pet = require('./pet')

class Dog extends Pet {
    constructor(name, color, breed) {
        super(name, color, 'Dog')
        this.breed = breed
    }
    speak() {
        return 'Bark!'
    }
}

module.exports = Dog