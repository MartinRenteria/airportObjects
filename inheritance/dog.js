const Pet = require('./pet')

class Dog extends Pet {
    constructor(name, color, breed) {
        super(name, breed, 'Dog')
        this.breed = breed
    }
    speak() {
        return 'Bark!'
    }
}

module.exports = Dog