class Dog {
    constructor(name, breed) {
        this.name = name
        this.breed = breed
    }
    speak() {
        return 'Bark!'
    }
}

class Corgi extends Dog {
    constructor(name) {
        super(name)
        this.breed = 'Corgi'
        this.legs = 4
    }
}

class Husky extends Dog {
    constructor(name) {
        super(name) 
            this.breed = 'Husky'
    }
}

let corgiChild = new Corgi('bob')
let huskyChild = new Husky()

console.log(huskyChild.speak())
console.log(corgiChild.name)